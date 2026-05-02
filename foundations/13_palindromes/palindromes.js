const palindromes = function (str) {
  let originalString = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let reversedString = originalString.split("").reverse().join("");

  return originalString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
