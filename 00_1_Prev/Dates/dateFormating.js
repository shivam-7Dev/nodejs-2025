const date = new Date();
console.log(date); //2024-11-05T08:48:29.911Z
console.log(date.toISOString()); //2024-11-05T08:48:29.911Z
console.log(date.toUTCString()); //Tue, 05 Nov 2024 08:48:29 GMT
console.log(date.toString()); //Tue Nov 05 2024 14:18:29 GMT+0530 (India Standard Time)
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

console.log(date.toLocaleString("en-us", options));
console.log(date.toLocaleString("en-GB", options));
