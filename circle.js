const PI = 3.14;
const calculateArea = (r) => PI * r * r;
const calculateCircumference = (r) => 2 * PI * r;

// exports.calculateArea = calculateArea;
// exports.calculateCircumference = calculateCircumference;
// exports.lifeOfPi = PI;

exports = {
    calculateArea: calculateArea,
    calculateCircumference: calculateCircumference
};

module.exports = exports;