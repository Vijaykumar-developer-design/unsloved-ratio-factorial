let Ratio = require("/home/workspace/coding-practices/coding-practice-2d/utilities/ratio/index.js");
let Factorial = require("/home/workspace/coding-practices/coding-practice-2d/utilities/factorial/index.js");
let ratioAndFactorial = (a, b, c) => {
  let ratio = Ratio(a, b);
  let fact = Factorial(c);
  let resultObj = { ratio: ratio, factorial: fact };
  return resultObj;
};

module.exports = ratioAndFactorial;
