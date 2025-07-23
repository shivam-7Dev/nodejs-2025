const date = new Date();
console.log(date); //2024-11-05T09:29:52.084Z
/**
 * adding n days to current date
 */
console.log(date.toUTCString()); //Tue, 05 Nov 2024 09:29:52 GMT
date.setDate(date.getDate() + 5);
console.log(date.toUTCString()); //Sun, 10 Nov 2024 09:29:52 GMT (after adding 5 days)
date.setDate(date.getDate() + 100);
console.log(date.toUTCString()); //Tue, 18 Feb 2025 09:31:10 GMT (after adding 100 days)

/**
 * adding n months to current date
 */

console.log(date.setMonth(date.getMonth() + 20));
console.log(date.toUTCString()); //Sun, 18 Oct 2026 09:33:27 GMT (after adding 20 months to prev date)
