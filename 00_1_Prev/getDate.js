const date = new Date();
console.log(date); //2024-11-05T08:48:29.911Z
console.log(date.toISOString()); //2024-11-05T08:48:29.911Z
console.log(date.toUTCString()); //Tue, 05 Nov 2024 08:48:29 GMT
console.log(date.toString()); //Tue Nov 05 2024 14:18:29 GMT+0530 (India Standard Time)

console.log("----------getsimple-------------");
console.log(date.getFullYear());
console.log(date.getMonth()); // here month will be one less than orignal month
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getDay()); //2 means tuesday
console.log(date.getTimezoneOffset()); //-330

console.log("-----getUTC--------");
console.log(date.getUTCFullYear());
console.log(date.getUTCMonth());
console.log(date.getUTCDate());
console.log(date.getUTCHours());
console.log(date.getUTCMinutes());
console.log(date.getUTCSeconds());
console.log(date.getUTCMilliseconds());
console.log(date.getUTCDay());

console.log("-----------");
