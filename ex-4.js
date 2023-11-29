// Start coding here
let calculator = {
  add: (a, b) => a + b,
  minus: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};
let addResult = calculator.add;
let divideResult = calculator.divide;

console.log(addResult(2, 4));
console.log(divideResult(3000, 10));
