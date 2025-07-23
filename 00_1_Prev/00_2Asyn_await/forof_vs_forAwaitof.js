//for...await...of vs. for...of with await

/**
 * 
 for (const item of syncArray) { 
    await asyncOperation(item); 
    //The loop waits for asyncOperation to complete 
    // before starting the next iteration.
 }

 Use Case: 
    You have a regular, synchronous array 
    (all data is in memory).

 Action: 
    You want to perform an async operation on each item sequentially. 
    The loop waits for asyncOperation to complete before starting the next iteration.

 */

/**
 * for await (const item of asyncIterable) { ... }
 * 
    Use Case: 
    You are iterating over an asynchronous data source 
    (the data itself arrives over time).

    Action:
    The loop waits for the next piece of data to become available
    from the source before running the code inside the loop. 
 */

/**
 * It's backward-compatible: if you use for await...of on a regular array or a sync generator,
 *  it will treat each item as if it's already a resolved promise.
 */
