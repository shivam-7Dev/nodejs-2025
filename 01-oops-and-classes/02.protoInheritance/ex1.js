/*
    1. Log out all the properties within the Object
       prototype. (Only it's own properties)

    2. Log out all the properties within the Array
       prototype. (Only it's own properties)

    3. Log out all the properties within the Array
       prototype's prototype.

    4. Does this make sense? Why?
*/

(() => {
  console.log(Object.keys(Object.prototype)); // []

  console.log(Object.getOwnPropertyNames(Object.prototype));
  /**
   [
  'constructor',
  '__defineGetter__',
  '__defineSetter__',
  'hasOwnProperty',
  '__lookupGetter__',
  '__lookupSetter__',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
  'valueOf',
  '__proto__',
  'toLocaleString'
   ]
   */

  console.log(Object.getOwnPropertyNames(Array.prototype));
  /**
   [
  'length',        'constructor', 'at',
  'concat',        'copyWithin',  'fill',
  'find',          'findIndex',   'findLast',
  'findLastIndex', 'lastIndexOf', 'pop',
  'push',          'reverse',     'shift',
  'unshift',       'slice',       'sort',
  'splice',        'includes',    'indexOf',
  'join',          'keys',        'entries',
  'values',        'forEach',     'filter',
  'flat',          'flatMap',     'map',
  'every',         'some',        'reduce',
  'reduceRight',   'toReversed',  'toSorted',
  'toSpliced',     'with',        'toLocaleString',
  'toString'
   ]
   */
})();
