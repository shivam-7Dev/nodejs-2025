class Database {
  /**
   * # is used to make data and methods private
   * In modern JavaScript (ES2022 and later),
   * you can use # to define private fields and methods in a class.
   */

  #token = "123rfsadf"; // private field

  randString = "123rfsadf"; // public property

  constructor() {}

  #initDbConnection() {
    // private method
  }

  #authorize() {
    // private method
  }

  #updatequery() {
    // private method
  }

  // this methods  is accesible only
  saveData(data) {
    this.#initDbConnection();
    this.#authorize();
    this.#updatequery();
  }

  static descript =
    "this is statich data and this is class data and not instace data";

  static classMathod() {
    console.log("this is also class mehtods and not instance method");
    //this inside static classMathod() refers to the class itself, not an instance.
  }
}
/**
Encapsulation:Organizing data and behavior together inside a class.
Data Hiding	Restricting direct access to some of an object’s internal details. 
*/
const myDb = new Database();
console.log(myDb); //Database { randString: '123rfsadf' }

myDb.saveData([12, 123]);

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(myDb)));

/**
 * [
  'constructor',
  'initDbConnection',
  'authorize',
  'updatequery',
  'saveData'
]
 */

console.log(Database.descript);
Database.classMathod();
