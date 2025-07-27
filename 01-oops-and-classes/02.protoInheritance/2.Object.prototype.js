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

/**
    🧠 TL;DR
    ✅ Yes, Object is a constructor function
    ✅ It has a .prototype because all functions do
    ✅ Adding to Object.prototype affects all objects 
       (except ones made with Object.create(null))
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

console.log(Object.getOwnPropertyNames(Object.__proto__.__proto__));
