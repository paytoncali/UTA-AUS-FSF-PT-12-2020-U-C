// TODO: Import `maths.js`
const maths = require('./maths.js');
console.log(process.argv);

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const op = process.argv[2];
const firstNum = parseInt(process.argv[3]);
const secondNum = parstInt(process.argv[4]);
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
if (op === 'sum') {
    const result = maths.sum(firstNum, secondNum);
    console.log(result);
}