const superHero = "superman";
console.log({ superHero });

/**
 * each module/file code is wrapped in an Iffe thats why there is no
 * name clash of variables
 *
 * Before a moudle code is executed Nodejs will wrap it with a function wrapper
 * that provides module scope
 */
