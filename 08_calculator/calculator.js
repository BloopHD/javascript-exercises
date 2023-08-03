const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => (total + num), 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => (total === 0) ? total + num : total * num, 0);
};

const power = function(a, b) {
  let c = a;
	while(b > 1) {
    a *= c;
    b--;
  }
  return a;
};

const factorial = function(a) {

  let b = 1;

  while (a > 1) {
    b *= a;
    a--;
  }

  return b;
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
