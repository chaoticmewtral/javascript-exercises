const add = function(...args) {
	let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
};

const subtract = function(a, b) {
	let diff = (a - b);
  return diff;
};

const sum = function(arr) {
	let sum = 0;
  for(let key in arr) {
    sum += key;
  }
  return sum;
};

const multiply = function(multArr) {
let multTotal;
for(let i = 0; i < multArr.length; i++) {
  multTotal *= multArr[i];
}
return multTotal;
};

const power = function(x, y) {
	let pwrOf = x ** y;
  return pwrOf;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
