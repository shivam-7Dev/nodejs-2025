/**
Why Create One? What Problems Do They Solve?
You create a custom writable stream to create an abstraction over a "sink" or destination for data.
It allows any readable stream to pipe data to your destination without needing to know the implementation details.

Problems Solved:

Decoupling: A readable stream (like reading a file or a network request) doesn't need to know if it's writing to a file, a database, or a WebSocket. It just needs to pipe() to a writable interface.
Memory Management: It provides a standard way to handle backpressure. If your destination (e.g., a slow network connection) can't keep up, the writable stream signals the readable stream to pause, preventing your application's memory from exploding.
Standardization: It provides a common API (.write(), .end(), finish event) for any data destination, making your code more modular and reusable.

Use Cases:
Writing to a database, a logging service, or a remote API.
Uploading a file to a cloud storage service like S3.
Sending data over a WebSocket or a custom network protocol.
 */

/**
 * Interview questins
 */

/**
 * 1. Core Concepts & Backpressure:
 * 
 * "You've implemented _write. Explain the role of the callback function in the context of backpressure. What happens if you forget to call it?"

Expected Answer: The callback signals that the current chunk has been processed and the stream is ready for the next one. If you don't call it, the stream will stall, no more data will be written, and a drain event will never be emitted, causing the entire pipeline to hang.
"Describe the relationship between writable.write() returning false and the drain event. How does your _write implementation influence this?"

Expected Answer: write() returns false when the internal buffer (writableHighWaterMark) is full. This is a signal to the producer to stop sending data. The drain event is emitted only after the buffer has emptied, which happens as our _write method successfully processes chunks and calls its callback. A slow _write implementation will cause the buffer to fill up faster and delay the drain event.
 */

/**
 * 2. Lifecycle and Error Handling:
 * 
 * "Beyond _write, what other private methods are important in the lifecycle of a writable stream, and why would you implement them?"

Expected Answer: _construct for asynchronous setup (like opening a file or a network connection), _final for signaling the completion of writing before the finish event (e.g., writing a footer), and _destroy for resource cleanup (closing file descriptors, database connections).
"How do you properly handle an error that occurs within your _write method? What is the impact on the stream pipeline?"

Expected Answer: You pass an Error object to the callback (e.g., callback(new Error('...'))). This will emit an error event on the stream itself and destroy the stream. In a pipeline, this will automatically destroy all other streams in the pipeline, preventing memory leaks.
 */

/**
 * 3. Advanced & Architectural Thinking:
 * 
 * "Imagine you are creating a writable stream to upload a large file to a cloud service. The upload API requires data to be sent in fixed-size chunks (e.g., 5MB). How would you design your custom writable stream to handle this?"

Expected Answer: This tests architectural thinking. The developer should suggest creating an internal buffer inside the custom stream. The _write method would append incoming chunks to this internal buffer. When the internal buffer reaches 5MB, it would make the API call. Any remaining data would be flushed in the _final method. This shows an understanding of buffering and adapting to destination constraints.
"What is objectMode and when is it absolutely necessary for a custom writable stream?"

Expected Answer: objectMode: true allows the stream to accept JavaScript objects instead of just Buffers or strings. It's necessary when you are not dealing with raw binary data, such as streaming database records, log objects, or JSON objects through a pipeline. They should also mention that highWaterMark in object mode refers to the number of objects, not the number of bytes.
 */
