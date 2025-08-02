# Complete Node.js Streams Documentation Guide

## Table of Contents
1. [Introduction to Streams](#introduction-to-streams)
2. [Types of Streams](#types-of-streams)
3. [Stream Fundamentals](#stream-fundamentals)
4. [Writable Streams](#writable-streams)
5. [Readable Streams](#readable-streams)
6. [Duplex Streams](#duplex-streams)
7. [Transform Streams](#transform-streams)
8. [Stream Utilities](#stream-utilities)
9. [Advanced Topics](#advanced-topics)
10. [Best Practices & Real-World Examples](#best-practices--real-world-examples)

---

## 1. Introduction to Streams

### What are Streams?
Streams are an abstract interface for working with streaming data in Node.js. They provide a way to handle data piece by piece, rather than loading everything into memory at once.

**Key Benefits:**
- **Memory Efficient**: Process large files without loading them entirely into memory
- **Time Efficient**: Start processing data before all of it is available
- **Composable**: Chain multiple operations together
- **Event-driven**: Built on Node.js EventEmitter pattern

### Real-Life Analogy
Think of streams like a water pipe:
- **Readable Stream**: Water flowing out of a faucet (you can read/consume the water)
- **Writable Stream**: A drain (you can write/pour water into it)
- **Duplex Stream**: A pipe with water flowing both ways
- **Transform Stream**: A filter that modifies water as it passes through

### Basic Usage Example
```javascript
const fs = require('fs');
const http = require('http');

// Simple HTTP server using streams
const server = http.createServer((req, res) => {
    // req is a Readable stream, res is a Writable stream
    req.pipe(res); // Pipe request data directly to response
});
```

---

## 2. Types of Streams

### 2.1 Readable Streams
**Purpose**: Source of data that you can read from

**Examples:**
- HTTP responses (client-side)
- File read streams
- Process stdin
- TCP socket (readable side)

**Real-world Use Cases:**
- Reading large log files
- Processing CSV data
- Streaming video content
- Reading database query results

### 2.2 Writable Streams
**Purpose**: Destination where you can write data

**Examples:**
- HTTP requests (client-side)
- File write streams
- Process stdout/stderr
- TCP socket (writable side)

**Real-world Use Cases:**
- Writing processed data to files
- Sending data to databases
- HTTP request bodies
- Logging systems

### 2.3 Duplex Streams
**Purpose**: Both readable and writable

**Examples:**
- TCP sockets
- WebSocket connections
- Crypto streams (some)

**Real-world Use Cases:**
- Network connections
- Real-time communication
- Bidirectional data transformation

### 2.4 Transform Streams
**Purpose**: Modify or transform data as it passes through

**Examples:**
- Compression (gzip, deflate)
- Encryption/decryption
- Data parsing/formatting
- Image processing

**Real-world Use Cases:**
- File compression
- Data validation and formatting
- Protocol translation
- Content filtering

---

## 3. Stream Fundamentals

### 3.1 Object Mode
Streams can operate in two modes:

**Binary Mode (Default):**
- Works with strings, Buffers, TypedArrays, DataViews
- Data is measured in bytes

**Object Mode:**
- Works with any JavaScript objects (except null)
- Data is measured in number of objects

```javascript
const { Readable } = require('stream');

// Binary mode stream
const binaryStream = new Readable({
    read() {
        this.push(Buffer.from('hello')); // Buffer data
        this.push(null); // End stream
    }
});

// Object mode stream
const objectStream = new Readable({
    objectMode: true,
    read() {
        this.push({ name: 'John', age: 30 }); // JavaScript object
        this.push(null); // End stream
    }
});
```

### 3.2 Buffering
**What is Buffering?**
Internal storage mechanism that temporarily holds data when producer and consumer operate at different speeds.

**High Water Mark:**
- Threshold that controls buffering behavior
- Default: 64KB for binary mode, 16 objects for object mode
- When reached, backpressure mechanisms activate

```javascript
const fs = require('fs');

// Create stream with custom buffer size
const readStream = fs.createReadStream('large-file.txt', {
    highWaterMark: 1024 * 1024 // 1MB buffer
});

const writeStream = fs.createWriteStream('output.txt', {
    highWaterMark: 512 * 1024 // 512KB buffer
});
```

### 3.3 Backpressure
**Definition**: Mechanism to handle when data producer is faster than consumer

**Why Important?**
- Prevents memory overflow
- Maintains application stability
- Ensures efficient resource usage

```javascript
const fs = require('fs');

function copyFileWithBackpressure(source, destination) {
    const readStream = fs.createReadStream(source);
    const writeStream = fs.createWriteStream(destination);
    
    readStream.on('data', (chunk) => {
        const canWriteMore = writeStream.write(chunk);
        if (!canWriteMore) {
            // Backpressure detected - pause reading
            readStream.pause();
            
            // Wait for drain event before resuming
            writeStream.once('drain', () => {
                readStream.resume();
            });
        }
    });
    
    readStream.on('end', () => {
        writeStream.end();
    });
}
```

---

## 4. Writable Streams

### 4.1 Core Concepts

**Purpose**: Accept and process data written to them

**Key Methods:**
- `write()`: Write data to stream
- `end()`: Signal no more data will be written
- `cork()`/`uncork()`: Control buffering behavior
- `destroy()`: Forcefully close stream

### 4.2 Essential Events

#### Event: 'drain'
**When**: Buffer has space again after being full
**Use**: Resume writing when backpressure was detected

```javascript
const fs = require('fs');

function writeToFile(filename, data) {
    const writeStream = fs.createWriteStream(filename);
    
    data.forEach((chunk, index) => {
        const canContinue = writeStream.write(`Chunk ${index}: ${chunk}\n`);
        
        if (!canContinue) {
            console.log('Backpressure detected, waiting for drain...');
            writeStream.once('drain', () => {
                console.log('Can continue writing');
            });
        }
    });
    
    writeStream.end();
}
```

#### Event: 'finish'
**When**: All data has been flushed after calling `end()`
**Use**: Perform cleanup or notify completion

```javascript
const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.on('finish', () => {
    console.log('All data has been written to file');
});

writeStream.write('Hello ');
writeStream.write('World!');
writeStream.end(); // Triggers 'finish' when complete
```

#### Event: 'error'
**When**: Error occurs during writing
**Use**: Handle write failures

```javascript
const fs = require('fs');

const writeStream = fs.createWriteStream('/invalid/path/file.txt');

writeStream.on('error', (err) => {
    console.error('Write error:', err.message);
    // Handle error (retry, fallback, etc.)
});

writeStream.write('This will fail');
```

### 4.3 Advanced Writable Stream Features

#### Cork and Uncork
**Purpose**: Batch multiple writes for efficiency

```javascript
const fs = require('fs');

const writeStream = fs.createWriteStream('batched-output.txt');

// Cork the stream to batch writes
writeStream.cork();

writeStream.write('First chunk ');
writeStream.write('Second chunk ');
writeStream.write('Third chunk ');

// Uncork to flush all batched writes at once
process.nextTick(() => {
    writeStream.uncork();
});

writeStream.end();
```

### 4.4 Custom Writable Stream Implementation

```javascript
const { Writable } = require('stream');

class DatabaseWriter extends Writable {
    constructor(options) {
        super(options);
        this.records = [];
        this.batchSize = options.batchSize || 100;
    }
    
    _write(chunk, encoding, callback) {
        try {
            const record = JSON.parse(chunk.toString());
            this.records.push(record);
            
            if (this.records.length >= this.batchSize) {
                this._flushBatch(callback);
            } else {
                callback(); // Signal write complete
            }
        } catch (error) {
            callback(error); // Signal error
        }
    }
    
    _final(callback) {
        // Called when stream is ending
        if (this.records.length > 0) {
            this._flushBatch(callback);
        } else {
            callback();
        }
    }
    
    _flushBatch(callback) {
        // Simulate database write
        console.log(`Writing ${this.records.length} records to database`);
        // database.insertMany(this.records)
        this.records = [];
        setTimeout(callback, 100); // Simulate async operation
    }
}

// Usage
const dbWriter = new DatabaseWriter({ batchSize: 50 });

dbWriter.on('finish', () => {
    console.log('All records written to database');
});

// Write data
dbWriter.write(JSON.stringify({ id: 1, name: 'John' }));
dbWriter.write(JSON.stringify({ id: 2, name: 'Jane' }));
dbWriter.end();
```

### 4.5 Real-World Writable Stream Examples

#### Log File Writer with Rotation
```javascript
const { Writable } = require('stream');
const fs = require('fs');
const path = require('path');

class RotatingLogWriter extends Writable {
    constructor(options) {
        super(options);
        this.basePath = options.basePath;
        this.maxSize = options.maxSize || 10 * 1024 * 1024; // 10MB
        this.currentSize = 0;
        this.fileIndex = 0;
        this._createNewFile();
    }
    
    _write(chunk, encoding, callback) {
        const size = chunk.length;
        
        if (this.currentSize + size > this.maxSize) {
            this._rotateFile();
        }
        
        fs.write(this.fd, chunk, (err) => {
            if (err) {
                callback(err);
            } else {
                this.currentSize += size;
                callback();
            }
        });
    }
    
    _createNewFile() {
        const filename = `${this.basePath}.${this.fileIndex}.log`;
        this.fd = fs.openSync(filename, 'w');
        this.currentSize = 0;
    }
    
    _rotateFile() {
        fs.closeSync(this.fd);
        this.fileIndex++;
        this._createNewFile();
    }
    
    _destroy(err, callback) {
        if (this.fd) {
            fs.close(this.fd, callback);
        } else {
            callback(err);
        }
    }
}

// Usage
const logger = new RotatingLogWriter({
    basePath: './logs/app',
    maxSize: 1024 * 1024 // 1MB per file
});

logger.write('Application started\n');
logger.write('User logged in\n');
logger.end();
```

---

## 5. Readable Streams

### 5.1 Reading Modes

#### Flowing Mode
**Characteristics:**
- Data flows automatically
- Uses event-driven pattern
- Cannot control when data arrives

```javascript
const fs = require('fs');

const readStream = fs.createReadStream('large-file.txt');

readStream.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes`);
    // Process chunk immediately
});

readStream.on('end', () => {
    console.log('File reading complete');
});

readStream.on('error', (err) => {
    console.error('Read error:', err);
});
```

#### Paused Mode
**Characteristics:**
- Manual control over data reading
- Pull-based approach
- Better for controlled processing

```javascript
const fs = require('fs');

const readStream = fs.createReadStream('large-file.txt');

readStream.on('readable', () => {
    let chunk;
    while (null !== (chunk = readStream.read())) {
        console.log(`Processing chunk of ${chunk.length} bytes`);
        // Process chunk with full control
        
        // Can pause processing if needed
        if (someCondition) {
            break; // Stop reading for now
        }
    }
});

readStream.on('end', () => {
    console.log('File reading complete');
});
```

### 5.2 Stream States

Readable streams have three states controlled by `readableFlowing` property:

1. **null**: No consumption mechanism provided
2. **false**: Paused state, data accumulating in buffer
3. **true**: Flowing state, data being emitted via events

```javascript
const { Readable } = require('stream');

const stream = new Readable({
    read() {
        this.push('data');
        this.push(null);
    }
});

console.log(stream.readableFlowing); // null (initial state)

stream.on('data', () => {}); // Switches to flowing mode
console.log(stream.readableFlowing); // true

stream.pause(); // Switches to paused mode
console.log(stream.readableFlowing); // false
```

### 5.3 Async Iteration Support

```javascript
const fs = require('fs');

async function processFile(filename) {
    const readStream = fs.createReadStream(filename, { encoding: 'utf8' });
    
    try {
        for await (const chunk of readStream) {
            // Process each chunk asynchronously
            await processChunk(chunk);
        }
        console.log('File processing complete');
    } catch (error) {
        console.error('Processing error:', error);
    }
}

async function processChunk(chunk) {
    // Simulate async processing
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Processed chunk: ${chunk.slice(0, 50)}...`);
            resolve();
        }, 100);
    });
}
```

### 5.4 Stream Methods and Utilities

#### Array-like Methods

```javascript
const { Readable } = require('stream');

// Create a stream of numbers
const numberStream = Readable.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Map: Transform each item
const doubledStream = numberStream.map(x => x * 2);

// Filter: Keep only items matching condition
const evenStream = Readable.from([1, 2, 3, 4, 5, 6])
    .filter(x => x % 2 === 0);

// Reduce: Accumulate values
const sum = await Readable.from([1, 2, 3, 4, 5])
    .reduce((acc, curr) => acc + curr, 0);

// Take/Drop: Limit stream items
const firstThree = Readable.from([1, 2, 3, 4, 5]).take(3);
const skipTwo = Readable.from([1, 2, 3, 4, 5]).drop(2);

// Convert to array
const result = await Readable.from(['a', 'b', 'c']).toArray();
console.log(result); // ['a', 'b', 'c']
```

### 5.5 Custom Readable Stream Implementation

```javascript
const { Readable } = require('stream');

class NumberGenerator extends Readable {
    constructor(options) {
        super(options);
        this.current = options.start || 1;
        this.max = options.max || 100;
    }
    
    _read() {
        if (this.current <= this.max) {
            this.push(Buffer.from(`${this.current}\n`));
            this.current++;
        } else {
            this.push(null); // End stream
        }
    }
}

// Usage
const generator = new NumberGenerator({ start: 1, max: 10 });

generator.on('data', (chunk) => {
    console.log('Number:', chunk.toString().trim());
});

generator.on('end', () => {
    console.log('Generation complete');
});
```

### 5.6 Real-World Readable Stream Examples

#### CSV File Reader
```javascript
const { Readable } = require('stream');
const fs = require('fs');

class CSVReader extends Readable {
    constructor(filename, options = {}) {
        super({ objectMode: true, ...options });
        this.filename = filename;
        this.fd = null;
        this.position = 0;
        this.buffer = '';
        this.headers = null;
    }
    
    _construct(callback) {
        fs.open(this.filename, 'r', (err, fd) => {
            if (err) {
                callback(err);
            } else {
                this.fd = fd;
                callback();
            }
        });
    }
    
    _read() {
        const chunk = Buffer.alloc(1024);
        fs.read(this.fd, chunk, 0, 1024, this.position, (err, bytesRead) => {
            if (err) {
                this.destroy(err);
                return;
            }
            
            if (bytesRead === 0) {
                this._processBuffer(true);
                this.push(null);
                return;
            }
            
            this.buffer += chunk.slice(0, bytesRead).toString();
            this.position += bytesRead;
            this._processBuffer(false);
        });
    }
    
    _processBuffer(isEnd) {
        const lines = this.buffer.split('\n');
        
        if (!isEnd) {
            // Keep last incomplete line in buffer
            this.buffer = lines.pop();
        } else {
            this.buffer = '';
        }
        
        lines.forEach((line, index) => {
            if (line.trim()) {
                if (!this.headers) {
                    this.headers = line.split(',').map(h => h.trim());
                } else {
                    const values = line.split(',').map(v => v.trim());
                    const record = {};
                    this.headers.forEach((header, i) => {
                        record[header] = values[i] || '';
                    });
                    this.push(record);
                }
            }
        });
    }
    
    _destroy(err, callback) {
        if (this.fd) {
            fs.close(this.fd, callback);
        } else {
            callback(err);
        }
    }
}

// Usage
const csvReader = new CSVReader('data.csv');

csvReader.on('data', (record) => {
    console.log('CSV Record:', record);
});

csvReader.on('end', () => {
    console.log('CSV reading complete');
});
```

---

## 6. Duplex Streams

### 6.1 Understanding Duplex Streams

**Key Characteristics:**
- Independent readable and writable sides
- Separate internal buffers for each side
- Can read and write simultaneously

### 6.2 Creating Simple Duplex Stream

```javascript
const { Duplex } = require('stream');

class EchoStream extends Duplex {
    constructor(options) {
        super(options);
        this.queue = [];
    }
    
    _write(chunk, encoding, callback) {
        // Store written data for reading
        this.queue.push(chunk);
        callback();
        
        // Make data available for reading
        this._read();
    }
    
    _read() {
        if (this.queue.length > 0) {
            const chunk = this.queue.shift();
            this.push(chunk);
        }
    }
}

// Usage
const echo = new EchoStream();

echo.on('data', (chunk) => {
    console.log('Echo received:', chunk.toString());
});

echo.write('Hello');
echo.write('World');
echo.end();
```

### 6.3 Real-World Duplex Example: Simple TCP-like Stream

```javascript
const { Duplex } = require('stream');

class MockTCPStream extends Duplex {
    constructor(options) {
        super(options);
        this.connected = true;
        this.remoteData = [];
        this.localData = [];
    }
    
    _write(chunk, encoding, callback) {
        if (!this.connected) {
            callback(new Error('Connection closed'));
            return;
        }
        
        // Simulate sending data over network
        console.log('Sending:', chunk.toString());
        this.remoteData.push(chunk);
        
        // Simulate network delay
        setTimeout(callback, 10);
    }
    
    _read() {
        if (this.localData.length > 0) {
            const data = this.localData.shift();
            this.push(data);
        }
    }
    
    // Simulate receiving data from remote
    receive(data) {
        this.localData.push(Buffer.from(data));
        this._read();
    }
    
    disconnect() {
        this.connected = false;
        this.push(null); // End readable side
    }
}

// Usage
const connection = new MockTCPStream();

connection.on('data', (chunk) => {
    console.log('Received:', chunk.toString());
});

connection.write('Hello from client');
connection.receive('Hello from server');
connection.write('How are you?');
connection.receive('Fine, thanks!');

setTimeout(() => {
    connection.disconnect();
}, 1000);
```

---

## 7. Transform Streams

### 7.1 Core Concepts

**Purpose**: Modify data as it flows through the stream

**Key Methods:**
- `_transform()`: Process each chunk of data
- `_flush()`: Handle any remaining data when stream ends

### 7.2 Simple Transform Examples

#### Uppercase Transform
```javascript
const { Transform } = require('stream');

class UppercaseTransform extends Transform {
    _transform(chunk, encoding, callback) {
        const upperChunk = chunk.toString().toUpperCase();
        this.push(upperChunk);
        callback();
    }
}

// Usage with pipeline
const fs = require('fs');
const { pipeline } = require('stream');

pipeline(
    fs.createReadStream('input.txt'),
    new UppercaseTransform(),
    fs.createWriteStream('output.txt'),
    (err) => {
        if (err) {
            console.error('Pipeline error:', err);
        } else {
            console.log('Text converted to uppercase');
        }
    }
);
```

#### JSON Line Parser
```javascript
const { Transform } = require('stream');

class JSONLineParser extends Transform {
    constructor(options) {
        super({ objectMode: true, ...options });
        this.buffer = '';
    }
    
    _transform(chunk, encoding, callback) {
        this.buffer += chunk.toString();
        const lines = this.buffer.split('\n');
        
        // Keep incomplete line in buffer
        this.buffer = lines.pop();
        
        lines.forEach(line => {
            if (line.trim()) {
                try {
                    const obj = JSON.parse(line);
                    this.push(obj);
                } catch (err) {
                    this.emit('error', new Error(`Invalid JSON: ${line}`));
                }
            }
        });
        
        callback();
    }
    
    _flush(callback) {
        if (this.buffer.trim()) {
            try {
                const obj = JSON.parse(this.buffer);
                this.push(obj);
            } catch (err) {
                this.emit('error', new Error(`Invalid JSON: ${this.buffer}`));
            }
        }
        callback();
    }
}

// Usage
const fs = require('fs');
const parser = new JSONLineParser();

fs.createReadStream('data.jsonl')
    .pipe(parser)
    .on('data', (obj) => {
        console.log('Parsed object:', obj);
    })
    .on('error', (err) => {
        console.error('Parse error:', err.message);
    });
```

### 7.3 Advanced Transform Examples

#### Data Validation and Filtering
```javascript
const { Transform } = require('stream');

class DataValidator extends Transform {
    constructor(schema, options) {
        super({ objectMode: true, ...options });
        this.schema = schema;
        this.validCount = 0;
        this.invalidCount = 0;
    }
    
    _transform(data, encoding, callback) {
        if (this._isValid(data)) {
            this.validCount++;
            this.push(data);
        } else {
            this.invalidCount++;
            console.warn('Invalid data:', data);
        }
        callback();
    }
    
    _flush(callback) {
        console.log(`Validation complete: ${this.validCount} valid, ${this.invalidCount} invalid`);
        callback();
    }
    
    _isValid(data) {
        // Simple validation based on schema
        for (const [field, type] of Object.entries(this.schema)) {
            if (typeof data[field] !== type) {
                return false;
            }
        }
        return true;
    }
}

// Usage
const validator = new DataValidator({
    id: 'number',
    name: 'string',
    email: 'string'
});

const testData = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 'invalid', name: 'Jane', email: 'jane@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];

const { Readable } = require('stream');

Readable.from(testData)
    .pipe(validator)
    .on('data', (validData) => {
        console.log('Valid record:', validData);
    });
```

#### Rate Limiting Transform
```javascript
const { Transform } = require('stream');

class RateLimiter extends Transform {
    constructor(requestsPerSecond, options) {
        super({ objectMode: true, ...options });
        this.requestsPerSecond = requestsPerSecond;
        this.queue = [];
        this.processing = false;
        this.interval = 1000 / requestsPerSecond;
    }
    
    _transform(chunk, encoding, callback) {
        this.queue.push({ chunk, callback });
        this._processQueue();
    }
    
    _processQueue() {
        if (this.processing || this.queue.length === 0) {
            return;
        }
        
        this.processing = true;
        const { chunk, callback } = this.queue.shift();
        
        this.push(chunk);
        callback();
        
        setTimeout(() => {
            this.processing = false;
            this._processQueue();
        }, this.interval);
    }
}

// Usage: Limit to 2 requests per second
const rateLimiter = new RateLimiter(2);

const { Readable } = require('stream');
const requests = ['req1', 'req2', 'req3', 'req4', 'req5'];

Readable.from(requests)
    .pipe(rateLimiter)
    .on('data', (request) => {
        console.log(`Processing: ${request} at ${new Date().toISOString()}`);
    });
```

---

## 8. Stream Utilities

### 8.1 Pipeline

**Purpose**: Safely pipe streams together with proper error handling and cleanup

#### Basic Pipeline
```javascript
const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

// Compress a file
pipeline(
    fs.createReadStream('input.txt'),
    zlib.createGzip(),
    fs.createWriteStream('output.txt.gz'),
    (err) => {
        if (err) {
            console.error('Pipeline failed:', err);
        } else {
            console.log('File compressed successfully');
        }
    }
);
```

#### Pipeline with Custom Transforms
```javascript
const { pipeline, Transform } = require('stream');
const fs = require('fs');

class LineCounter extends Transform {
    constructor(options) {
        super(options);
        this.lineCount = 0;
    }
    
    _transform(chunk, encoding, callback) {
        const lines = chunk.toString().split('\n');
        this.lineCount += lines.length - 1; // -1 because last split might not be complete line
        this.push(chunk);
        callback();
    }
    
    _flush(callback) {
        console.log(`Total lines processed: ${this.lineCount}`);
        callback();
    }
}

pipeline(
    fs.createReadStream('large-file.txt'),
    new LineCounter(),
    fs.createWriteStream('copy.txt'),
    (err) => {
        if (err) {
            console.error('Pipeline failed:', err);
        } else {
            console.log('File copied with line count');
        }
    }
);
```

#### Promise-based Pipeline
```javascript
const { pipeline } = require('stream/promises');
const fs = require('fs');
const zlib = require('zlib');

async function compressFile(input, output) {
    try {
        await pipeline(
            fs.createReadStream(input),
            zlib.createGzip(),
            fs.createWriteStream(output)
        );
        console.log('Compression complete');
    } catch (error) {
        console.error('Compression failed:', error);
    }
}

compressFile('input.txt', 'output.txt.gz');
```

### 8.2 Finished Utility

**Purpose**: Get notified when a stream is complete

```javascript
const { finished } = require('stream');
const fs = require('fs');

const readStream = fs.createReadStream('file.txt');

finished(readStream, (err) => {
    if (err) {
        console.error('Stream failed:', err);
    } else {
        console.log('Stream completed successfully');
    }
});

// Start reading
readStream.resume();
```

#### Promise-based Finished
```javascript
const { finished } = require('stream/promises');
const fs = require('fs');

async function waitForStream() {
    const readStream = fs.createReadStream('file.txt');
    
    readStream.resume(); // Start reading
    
    try {
        await finished(readStream);
        console.log('Stream completed');
    } catch (error) {
        console.error('Stream error:', error);
    }
}
```

### 8.3 Stream Composition

**Purpose**: Combine multiple streams into one

```javascript
const { compose, Transform } = require('stream');

// Create individual transforms
const removeSpaces = new Transform({
    transform(chunk, encoding, callback) {