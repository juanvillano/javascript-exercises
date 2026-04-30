const add = function(one, two) {
	return one + two;
};

const subtract = function(one, two) {
	return one - two;
};

const sum = function(arr) {
	return arr.reduce((total, nextNumber) => total + nextNumber, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, nextNumber) => total * nextNumber);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(factorial) {
  if(factorial > 0) {
    for(let i = factorial - 1; i > 0; i--) {
      factorial *= (i);
    }
  } else if (factorial === 0) {
    factorial = 1;
  }
  return factorial;
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
