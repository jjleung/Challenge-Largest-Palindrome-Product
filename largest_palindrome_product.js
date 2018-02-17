/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
  const isPalind = num => {
    let numStr = num + "";
    let splitStr = numStr.split("");
    splitStr.reverse();
    splitStr = splitStr.join("");
    splitStr *= 1;
    return num === splitStr;
  };

  const findBigPal = digs => {
    let digArr = [];
    for (let d = 0; d < digs; d++) {
      digArr.push(9);
    }
    let maxFactor = digArr.join("");

    for (let i = 0; i <= maxFactor; i++) {
      for (let j = 0; j <= maxFactor; j++) {
        if (i * j > palindromeNumber && isPalind(i * j)) {
          factor_0 = i;
          factor_1 = j;
          palindromeNumber = i * j;
          // console.log(
          //   "f0: ",
          //   factor_0,
          //   " f1: ",
          //   factor_1,
          //   " p: ",
          //   palindromeNumber
          // );
        }
      }
    }
  };

  findBigPal(digits);
  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
