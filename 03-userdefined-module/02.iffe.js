(function (a, b) {
  console.log({ a, b });
  console.log(a + b);
})(2, 3);

(function () {
  const superHero = "superman";
  console.log({ superHero });
})();

(function () {
  const superHero = "Batman";
  console.log({ superHero });
})();

/**
 * with each iffe each funtion gets its own private scope thats why there is no
 * variable clash
 *
 * Under the hood node js uses the same pattern
 *
 * each module/file code is wrapped in an Iffe thats why there is no
 * name clash of variables
 *
 * Before a moudle code is executed Nodejs will wrap it with a function wrapper
 * that provides module scope
 *
 */
