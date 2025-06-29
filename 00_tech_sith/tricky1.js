//1
(function () {
    console.log("===question1=====");
    console.log([] + []);

    /**
 * plus sign + works on numbers{2 +2} or stings { "a"+"b"}
 * otherwise js would have to type cast to sting
 * js could covert the array into sting
 * when you convert empty array in string you get empty string ""
 * so we get ""+"". => ""
 * console.log(String([])+String([]));
 */

})();




//2
(function () {
    console.log("===question =====");
    console.log([1, 2, 3] + [5, 6]);
})();



//3
(function () {
    console.log("====question 3====");
    console.log(String({})); //"[object Object]"
    console.log({} + []); //"[object Object]"
    console.log({} + {}); //"[object Object][object Object]"
    console.log(({}) + ({})) //"[object Object][object Object]"
    console.log({ name: "shivam" } + { age: 32 });//[object Object][object Object]
    /**
     * The plus operator (+) is not defined for objects. When used with objects,
     * JavaScript's engine converts them to their primitive string representation.
     * The default string representation for a plain object is "[object Object]".
     *
     * console.log(({}).toString()); // Same as console.log(String({}))
     *
     * So, the expression becomes:
     * "[object Object]" + "[object Object]"
     * which results in the concatenated string:
     * "[object Object][object Object]"
     */
})();




//4


(function () {
    console.log("===question====");
    function a() {
        return "hello"
    }

    const data = a`hi`
    console.log(data);

    /**
     * This is an example of a tagged template literal.
     * When a function is followed by a template literal (the backticks ``),
     * it's called a "tagged template".
     *
     * The function (`a` in this case) is called, and the template literal is passed as arguments.
     * However, the function `a` doesn't accept any arguments and simply returns "hello".
     * The arguments from the template literal (`hi`) are ignored.
     *
     * So, `a` returns "hello", which is assigned to `data`.
     * The output is "hello".
     */
})();



//5
(function () {
    console.log("----question6 =====");
    function b(strings, ...values) {
        console.log({ arguments });
        console.log("strings:", strings);
        console.log("values:", values);
        return "something";
    }

    b`hi! i am shivam`
})();

//6
(function () {
    console.log("===function 6====");
    function highlight(strings, ...values) {
        console.log({ arguments });
        console.log({ strings });
        console.log({ values });
        let result = "";

        strings.forEach((str, i) => {
            result += str;
            if (i < values.length) {
                result += `[${values[i]}]`; // You can wrap it with anything you want
            }
        });

        return result;
    }
    const name = "Shivam";
    const role = "developer";

    const result = highlight`My name is ${name} and I work as a ${role}.`;
    console.log({ result });//{ result: 'My name is [Shivam] and I work as a [developer].' }s




})();
//7 =>how to make all the content on site editable?
/**
 * document.body.contentEditable=true
 */

//8
(
    function () {

        console.log("====question 8======");
        function y() {
            console.log(this.length);
        }

        let x = {
            length: 5,
            method: function (y) {
                console.log("this.lenght", this.length);
                console.log({ y });
                console.log({ arguments });
                arguments[0]()
            }
        }

        x.method(y, 1)
    }
)();


//9
(function () {
    console.log("====question 9====");

    const x = 'constructor'

    console.log(x);
    console.log(x[x]); // x['constructor'] == x.constructor ==String()
    console.log(x[x](1)); //1
    console.log(String(1)); //1
})();

//10
(function(){
    console.log("====question10====");
    console.log(0.1+0.2); //0.30000000000000004

    /**
     * 0.1 and 0.2 cannot be exactly represented in binary.
     * Their binary representations are approximations.
     * When added together, the tiny errors add up to a slightly inaccurate result:
     * This is not a bug, but a limitation of binary floating-point math.
     * If you want to work with precise decimal math (like in money), you can:
     * Number((0.1 + 0.2).toFixed(2)) // → 0.3
     * Reason: Floating-point precision limitation due to binary representation.
     */
})();

//11
(function(){
    console.log("====question11====");
     console.log("'hi.__proto__'","hi".__proto__);
    console.log("'hi.__proto__.__proto__'","hi".__proto__.__proto__);
    console.log("'hi.__proto__.__proto__.__proto__'","hi".__proto__.__proto__.__proto__);

})();

//12
(function(){
    console.log("====question12====");
    /**
     * write a funciton which returns number of argumts passes to it
     */


    function returnArgumetLenght(){
        return [].slice.call(arguments).length
        return arguments.length
    }

    const lenght= returnArgumetLenght(1,2,4,5,6)
    console.log("lenght------",lenght);

})();

//13
(function(){
    console.log("====question13====");

    const a={
        x:function(){
            console.log("x");
            return this

            return a
        },
        y:function(){
            console.log("y");
            return this
            return a
        },
        z:function(){
            console.log("z");
            return this
            return a
        }
    }

    a.x().y().z() // should print x,y,z

})();



