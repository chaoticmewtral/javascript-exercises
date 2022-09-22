// create a function that compares the given value (rmv) to each array item
// convert array to string?

// declare input variables
let value;
let arr;

// assign input variables to function
const removeFromArray = function(arr, value) {
   let index = arr.indexOf(value);
   arr.splice(index);
   return arr;
   }
// Do not edit below this line
module.exports = removeFromArray;
