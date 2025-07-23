const currentDate = new Date(new Date(new Date()));
console.log(currentDate);
const dateObj = new Date(currentDate); //2024-11-05T07:27:05.281Z => This is UTC time for 05-11-2024 12:20
const dateString = dateObj.toString();
const dateLocaleString = dateObj.toLocaleString();
const dateLocaleDateString = dateObj.toLocaleDateString();
const dateLocaleTimeString = dateObj.toLocaleTimeString();
const dateTimeString = dateObj.toTimeString();
console.log(dateObj); // iso date obj
console.log(dateString); // iso string representation
console.log(dateLocaleString); // local representaion
console.log(dateLocaleDateString);
console.log(dateLocaleTimeString);
console.log(dateTimeString);
console.log("dateObj.getHours()----", dateObj.getHours()); // give hour in local time zone //12
console.log("dateObj.getUTCHours()----", dateObj.getUTCHours()); // give hour in local time zone // 7

/**
 * declaring custom date
 *
 */

const stringDateInvalid = "2024-00-30"; //invalid month should start form 01
const stringDateValidYYMMDD = "2024-01-30";
const stringDateValidDDMMYY = "01-30-2024"; //not good way to make string
const customDateYYMMDD = new Date(stringDateValidYYMMDD);
console.log("customDateYYMMDD", customDateYYMMDD); //2024-11-30T00:00:00.000Z
const customDateDDMMYY = new Date(stringDateValidDDMMYY);
console.log("customDateDDMMYY", customDateDDMMYY);

const customDate2 = new Date(2024, 0, 26); // here month starts from 0(jan) new Date(Year, month, date, hour, minute, sec, millisec)
console.log(customDate2); //2024-01-25T18:30:00.000Z

/**
 * Time Stamps
 */

const timeStamp = new Date().getTime(); // Date.now() == new Date.getTime()
console.log(timeStamp);

const dateFromTimeStamp = new Date(timeStamp);
console.log(dateFromTimeStamp);
