//1
(function () {
    console.log("====question======");
    const x = [1, 2, 3, 4]
    console.log(x.indexOf(2)); //1
    console.log(x.indexOf(100)); //-1
    console.log(x[-1]); //undefined
    x[-1] = -1
    console.log(x[x.indexOf(10000)]); //-1
})();

//2
(function () {
    console.log("====question======");
    const a = [5, 1, 2, 12, 23, 45]
    // 1. Default sort (incorrect for numbers)
    // Converts elements to strings and sorts them lexicographically.
    // Result: [ 1, 12, 2, 23, 45, 5 ]
    const sort1 = [...a].sort() // Using spread to avoid mutating 'a'
    console.log("Default (string) sort:", sort1);

    // 2. Correct numeric sort
    // The compare function (a, b) => a - b sorts numbers in ascending order.
    const sort2 = a.sort((a, b) => a - b)
    console.log("Correct numeric sort:", sort2);
})();

//3
(function () {
    console.log("====question======");
    // let i=?
    // console.log(i*i); //0
    // console.log(i+1); //1
    // console.log(i-1);// -1
    // console.log(i/i); //1

    /**
     * i shoulg be Number.MIN_VALUE
     */
})();

//4
(function () {
    console.log("====question======");
    (function () {
        let a = b = 100

    })();
    // console.log(b);

    // console.log(a);
})();

//5
(function () {
    console.log("====question======");
    console.log(Nan===NaN); //false

    /**
     * NaN is the only JavaScript value that is not equal to itself
     * This is defined by the ECMAScript specification, which states that:
     * "NaN is not equal to anything, including itself."
     * NaN stands for "Not a Number", 
     * and it's used to represent a value that is not a legal number
     * (e.g., the result of 0 / 0 or parseInt("abc")).
     */


    /**
     * To compare if a value is NaN, you must use Number.isNaN():
     * Number.isNaN(NaN); // true ✅
     * Object.is(NaN, NaN); // true ✅
     */
})();

//6
(function () {
    console.log("====question======");
})();

//7
(function () {
    console.log("====question======");
})();

//8
(function () {
    console.log("====question======");
})();

//9
(function () {
    console.log("====question======");
})();


//10
(function () {
    console.log("====question======");
})();
