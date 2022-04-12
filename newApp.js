const circle = require('./circle.js');
// console.log(circle);

const area = circle.calculateArea(8);
const circumference = circle.calculateCircumference(8);
const pi = circle.lifeOfPi;

console.log(`Area = ${area}`);
console.log(`Circumference = ${circumference}`);
console.log(`Pi = ${pi}`);  