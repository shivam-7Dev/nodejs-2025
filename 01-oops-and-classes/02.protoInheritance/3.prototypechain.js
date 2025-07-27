Object.prototype.hello = () => {
  console.log("object says hello");
};

//every insatace of object will have this method

const person = {
  name: "shivam",
  age: 29,
};

person.hello(); //object says hello
