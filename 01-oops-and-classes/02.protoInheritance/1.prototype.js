const person = {
  name: "shivam",
  age: 30,
};

console.log(Object.getOwnPropertyNames(person)); //[ 'name', 'age' ]

console.log(person.__proto__); //[Object: null prototype] {}

console.log(person.__proto__ === Object.prototype); //true

console.log(Object.getOwnPropertyNames(person.__proto__));

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

console.log(Object.getOwnPropertyNames(Object));

/**
 * [
  'length',
  'name',
  'prototype',
  'assign',
  'getOwnPropertyDescriptor',
  'getOwnPropertyDescriptors',
  'getOwnPropertyNames',
  'getOwnPropertySymbols',
  'hasOwn',
  'is',
  'preventExtensions',
  'seal',
  'create',
  'defineProperties',
  'defineProperty',
  'freeze',
  'getPrototypeOf',
  'setPrototypeOf',
  'isExtensible',
  'isFrozen',
  'isSealed',
  'keys',
  'entries',
  'fromEntries',
  'values',
  'groupBy'
]
 */
