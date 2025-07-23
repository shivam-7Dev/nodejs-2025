const date = new Date();
console.log("Original Date:", date.toISOString());

// Add 2 days
const date2 = new Date(date); // Create a new Date object based on the original
date2.setDate(date2.getDate() + 2);
console.log("Date after adding 2 days:", date2.toISOString());

// Compare the original date with the new date
console.log(date.getTime() < date2.getTime()); // This will be false, as the original date is earlier than the new date
