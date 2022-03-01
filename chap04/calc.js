const { add, multiple, defaultNum, minus, Calculator } = require('./calculator');

console.log(add(7, 2));
console.log(minus(7, 2));
console.log(defaultNum);

const a = new Calculator(1, 2);
console.log(a.add());