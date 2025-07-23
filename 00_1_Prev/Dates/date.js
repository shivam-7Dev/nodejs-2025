// Date(year, month, day, hour, minute, second, ms)
/**
 * month =>0-11
 */
const dateObj = new Date();
console.log("dateObj", dateObj); // 2024-10-21T08:26:30.200Z
console.log("dateObj.toisosting", dateObj.toISOString());

console.log("dateObj.getDate", dateObj.getDate()); // 21
console.log("dateObj,getDay", dateObj.getDay()); // 1 (monday)
console.log("dateObj.getFullYear", dateObj.getFullYear()); //2024
console.log(" dateObj.getMonth", dateObj.getMonth()); // 9(oct)
console.log("dateObj.getHours", dateObj.getHours()); //13 // your local time zone
console.log("dateObj.getMinutes", dateObj.getMinutes()); // 56
console.log("dateObj.getMilliseconds", dateObj.getMilliseconds()); //200
console.log("dateObj.getTime", dateObj.getTime()); //1729499190200 Date.now()
console.log("dateObj.getTimezoneOffset", dateObj.getTimezoneOffset()); //-330
console.log("dateObj.getUTCDate", dateObj.getUTCDate()); //21
console.log("dateObj.getUTCDay", dateObj.getUTCDay()); //1
console.log("dateObj.getUTCHours", dateObj.getUTCHours()); //8
console.log("dateObj.getUTCSeconds", dateObj.getUTCSeconds()); //30
console.log("dateObj.getUTCMilliseconds", dateObj.getUTCMilliseconds()); //200
console.log("dateObj.getFullYear", dateObj.getFullYear()); //2024
console.log("dateObj.toLocaleString()", dateObj.toLocaleString()); //21/10/2024, 2:00:57 pm

// you can pass string representaion of date that is also valid =>2024-10-21T08:08:37.634Z

dateObj.setDate(dateObj.getDate() + 1);
console.log("dateObj", dateObj);

const dateObj2 = new Date(dateObj);
console.log("dateObj2", dateObj2);

// you can pass epoch time to the Date constructor too

const date1 = new Date("2023-12-31");
console.log("date1", date1);
const date2 = new Date("2024-01-01");
console.log("date2", date2);

if (date2 > date1) {
  console.log("date2-date1", date2 - date1);
}
