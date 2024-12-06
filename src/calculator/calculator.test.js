const calculator = require('./calculator');
const sum = require("../sum/sum.js");

test('Calculation of 2 numbers', () =>{
	expect(calculator.add(1,2)).toBe(3);
	expect(calculator.subtract(1,2)).toBe(-1);
	expect(calculator.multiply(1,2)).toBe(2);
	expect(calculator.divide(1,2)).toBe(0.5);
});