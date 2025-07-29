/**
 * looping over a million Time both consumes  lots of memory[wrong]
 * But reasons are differet
 * One increase the node memory [Asynchronous=> fs.write()]
 * One des not increase node memory but increase the system cache utilization
 * 
 Asynchronous => fs.write():
    Fills up the Node.js process memory.
    The fast loop queues up millions of pending write requests
    (the data and the callback functions) inside your application's memory space 
    because it doesn't wait for the disk.


 Synchronous and Blocking => fs.writeSync:
    Fills up the Operating System's buffer cache (in RAM). 
    The loop blocks your Node.js application for each call, 
    but it only waits for the OS to accept the data into its own memory buffer. 
    Your fast loop force-feeds this OS buffer, 
    causing the total system RAM usage to spike,
    even if your specific Node.js process's memory stays low.



   But memory usage is not mut around 50 MB, for blocking and Synchronous
   And system memory is also constant.
   Looks like kernel buffer is writing very fast to disk
   and there is no memory build up
   Although thread poll becomes stuck because of a million loop
   Looks like ChatGPT gave worng answer.
 */

/**
 * This is the fundamental distinction,
 * and it's the exact reason why Node.js streams were created—
 * to handle the asynchronous case gracefully
 * without consuming all the application's memory.
 */

/**
💡 Why Streams Were Created in Node.js
    When you're dealing with large data 
    (e.g., file writes, reads, network sockets, HTTP responses), you typically want:

    Non-blocking behavior (so your app can handle other things)
    Backpressure control (so you don’t flood memory)
    Incremental processing 
    (process data in chunks instead of loading the whole thing into memory)

    const stream = fs.createWriteStream('bigfile.txt');

    for (let i = 0; i < 1_000_000; i++) {
    const ok = stream.write(`${i}\n`);
    if (!ok) {
        await new Promise(resolve => stream.once('drain', resolve));
    }
    }

    stream.end();

 */

/**
   But memory usage is not mut around 50 MB, for blocking and Synchronous
   And system memory is also constant.
   Looks like kernel buffer is writing very fast to disk
   and there is no memory build up
   Although thread poll becomes stuck because of a million loop
   Looks like ChatGPT gave worng answer.
*/
