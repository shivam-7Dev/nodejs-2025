const string = "this $ is $ test $ data";

((param) => {
  const array = string.split(" ");
  for (let index = 0; index < Math.floor(array.length / 2); index++) {
    let element = array[index];
    array[index] = array[array.length - 1 - index];
    array[array.length - 1 - index] = element;
  }

  console.log(array);
})(string);
