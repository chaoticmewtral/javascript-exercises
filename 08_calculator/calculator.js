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
  const totalSum = arr.reduce(sumFunc);

  function sumFunc(total, value) {
    return total + value;
  }
  return totalSum;
};

const multiply = function(multArr) {
  let multTotal = 1;
  for(let i = 0; i < multArr.length; i++) {
    multTotal *= multArr[i];
  }
  return multTotal;
};

const power = function(x, y) {
	let pwrOf = x ** y;
  return pwrOf;
};

const factorial = function(n) {
	let fact = 1;
  for(i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
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
