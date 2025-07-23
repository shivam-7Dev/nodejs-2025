/**
 * when dealing with file we have three diffrent ways to do the same thing
 * 1. synchrounus api
 * 2. callback api
 * 3. Promise api
 */
const path = require("path");
// ***** Promise api *****
const fs = require("fs/promises");

(async () => {
  try {
    await fs.copyFile(
      path.join(__dirname, "data.txt"),
      path.join(__dirname, "dataCopyPromise.txt")
    );
    console.log("file copied");
  } catch (err) {
    console.log(err);
  }
})();

// ***** callback api *****
const fs = require("fs");

fs.copyFile(
  path.join(__dirname, "data.txt"),
  path.join(__dirname, "dataCopyCallback.txt"),
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("file copied");
  }
);

//** Syncdhrounus api */

const fs = require("fs");

fs.copyFileSync(
  path.join(__dirname, "data.txt"),
  path.join(__dirname, "dataCopySync.txt")
);
