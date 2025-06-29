
/**
    +        → Add OR Concatenate (based on types)
    - * / %  → Always numeric (tries to convert)
    ==       → Loose comparison (type coercion)
    ===      → Strict comparison (no coercion)
    &&       → AND → returns first falsy or last truthy
    ||       → OR  → returns first truthy
    !        → NOT → converts to boolean then flips
    typeof   → Returns type string
    in       → Checks key in object

 */

//1
(function () {
    console.log("====question======");

    console.log("=====(+)=====");

    /**
     * If one operand is a string, JS converts the other to a string and concatenates.
     * If both are numbers, it performs addition.
     */

    console.log(1 + 2);        // 3       → both numbers → added
    console.log(1 + "2");      // "12"    → number + string → string
    console.log("1" + 2 + 3);  // "123"   → "1" + 2 → "12", "12" + 3 → "123"
    console.log(1 + 2 + "3");  // "33"    → 1 + 2 → 3, then 3 + "3" → "33"
    console.log(true + "1");   // "true1" → boolean becomes string
    console.log([] + {});      // "[object Object]" → both coerced to strings
    console.log({} + []);      // 0 → tricky! ({} is empty block, +[] → 0)



    console.log("=====(-)=====");
    /**
     * JS always tries to convert both operands to numbers.
     * If it can’t → result is NaN
     */
    console.log(5 - 2);        // 3       → normal subtraction
    console.log("5" - 2);      // 3       → "5" converted to 5
    console.log("10" - "4");   // 6       → both strings converted
    console.log("abc" - 1);    // NaN     → "abc" can't become a number
    console.log(true - 1);     // 0       → true → 1, so 1 - 1 = 0
    console.log(null - 1);     // -1      → null → 0
    console.log(undefined - 1);// NaN     → undefined → NaN
    console.log([] - 1);       // -1      → [] → 0
    console.log([10] - 1);     // 9       → [10] → 10
    console.log([10, 20] - 1); // NaN     → [10,20] → "10,20" → can't convert to number


})();
//2
(function () {
    console.log("====question======");
    console.log("=====(*)=====");


    /**
     * Always numeric. Converts operands to numbers
     * If it can’t → result is NaN
     */
    console.log(2 * "3"); // 6 → "3" is converted to number
    console.log("2" * "3"); // 6 → both are strings but get converted
    console.log("hello" * 2); // NaN → "hello" can't be converted to a number

})();
//3
(function () {
    console.log("====question======");
    console.log("=====(/)=====");

    /**
    * Always numeric. Converts operands to numbers
    * If it can’t → result is NaN
    */
    console.log(10 / "2"); // 5 → "2" is converted to number
    console.log("20" / 2); // 10 → same here
    console.log("abc" / 2); // NaN

})();
//4
(function () {
    console.log("====question======");
    console.log("=====(%)=====");

    /**
    * Always numeric. Converts operands to numbers
    * If it can’t → result is NaN
    */

    console.log("10" % 3); // 1 → "10" becomes 10

})();
//5
(function () {
    console.log("====question======");
    console.log("=====(==)=====");

    /**
     * Compares after type coercion.
     */

    console.log(2 == "2"); // true → "2" is converted to number
    console.log(0 == false); // true
    console.log(null == undefined); // true
    console.log("" == 0); // true
    /**
     * == allows type coercion (converts values before comparing). 
     * That’s why it often surprises people.
     */

})();
//6
(function () {
    console.log("====question======");
    console.log(2 == "2");     // true
    console.log(2 === "2");    // false

    console.log(null == undefined); // true
    console.log(null === undefined); // false

    console.log(0 == false);   // true
    console.log(0 === false);  // false

})();
//7
(function () {
    console.log("====question======");
    console.log("===logical operators====");

    console.log(0 && "hello");    // 0 (first falsy)
    console.log("hi" && 123);     // 123 (both truthy → returns last)

    console.log(null || "default"); // "default" (first truthy)
    console.log("value" || 42);     // "value"

    console.log(!true); // false
    console.log(!0);    // true

})();

//8
(function () {
    console.log("====question======");
    /**
     * remove duplicates from array
     * do not use for loop,map or reduce 
     * do it in single line
     */
    const a=[1,2,2,3,4,4,5]

    const myset= new Set(a)
    const uniqearray= new Array(...myset)
    console.log({myset});
    console.log({uniqearray});

    /**
     * const unique=[...new Set(old array)]
     */

    console.log("uniquer array-----",[...new Set(a)]);
})();

//9
(function () {
    console.log("====question======");

    {
        let a="shiv"
        var b="atul"
    }
    console.log(b);
    // console.log(a); //ReferenceError: a is not defined
})();


//10
(function () {
    console.log("====question======");

    console.log(5<6<7); //true => true<7 => 1<7 => true

    console.log(7>6>5); //false => true>5 => 1>5 => false
})();

//10
(function () {
    console.log("====question======");
    let a= function(){return arguments} 
    console.log(a("hi","there")); //[Arguments] { '0': 'hi', '1': 'there' }
    let b= ()=>arguments
    console.log(b('hi')); //[Arguments] {}
      let c= (...args)=>args
    console.log(c('hi')); //[ 'hi' ]
})();

//10
(function () {
    console.log("====question======");
    let profile={
        name:"shivam"
    }
    //stop user from adding new property
    Object.freeze(profile)
    profile.age=20

    profile.name="shivam sharma"
    console.log(profile); //{ name: 'shivam' }

    /**
     * Object.freez(obj)
     * does not allow to add new property
     * and does not allow to change the exitting property
     */
})();

//10
(function () {
    console.log("====question======");
     let profile={
        name:"shivam"
    }
    //stop user from adding new property but let edit existin property
    Object.seal(profile)
    profile.age=20

    profile.name="shivam sharma"
    console.log(profile); //{ name: 'shivam' }

    /**
     * Object.seal(obj)
     * does not allow to add new property
     * and does not allow to modify the exitting property
     */
})();



//11
(function () {
    console.log("====question======");
     let profile={
        name:"shivam",
    }
   /**
    * i should be able to modify name but not age
    */

  Object.defineProperties(profile, {
  age: {
    value: 3,
    writable: false,
    configurable: true,
    enumerable: true
  }
});


   profile.name= "shivam sharma"
   profile.age=20
   console.log(profile);
})();


//12
(function () {
   console.log(Math.max(1,2,3,4));4
   /**
    * takes lowest value(-Infinity) and compares to 1 and one is greater
    * compares 1 to next number
    */

   console.log(Math.max());//-Infinity
   /**
    * takes lowest value(-Infinity) and compares noting this means
    * -Infinity is greter
    */
})();




