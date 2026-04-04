const sumAll = function(value1, value2) {
    let result = 0;

  if (typeof value1 != 'number' || typeof value2 != 'number' || value1 < 0 || value2 < 0 || !Number.isInteger(value1) || !Number.isInteger(value2) ) {
    return 'ERROR';
  } else {
    if (value1 < value2) {
      result = value1;
      for (let i = value2; i > value1; i--) {
        result += i;
      }
    } else if (value1 > value2) {
      result = value2;
      for (let i = value1; i > value2; i--) {
        result += i;
      }
    }
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
