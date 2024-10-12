//  import smart calculator

const SmartCalculator = require('../src/SmartCalculator');


// test case for empty string

describe('String Calculator', () => {
    test('it should return 0 for an empty("") string', () => {
        const calculator = new SmartCalculator();
        expect(calculator.add("")).toBe(0);
    });
});

// test case for single Number string

describe('String Calculator for Single Number', () => {
    test('should return 1 when passed 1', () => {
        const calculator = new SmartCalculator();
        expect(calculator.add("1")).toBe(1);
    });
});

// test case for multiple Number string
describe('String Calculator for multiple Number', () => {
    test('should return 6 when passed 1,5', () => {
        const calculator = new SmartCalculator();
        expect(calculator.add("1,5")).toBe(6);
    });
});

// test case for empty string
describe('String Calculator', () => {
    test('it should return 0 for an empty("") string or 0', () => {
        const calculator = new SmartCalculator();
        expect(calculator.multiply("")).toBe(0);
        expect(calculator.multiply(0)).toBe(0);

    });
});

// test case for single Number string
describe('String Calculator for Single Number', () => {
    test('should return 1 when passed 1', () => {
        const calculator = new SmartCalculator();
        expect(calculator.multiply("1")).toBe(1);
    });
});

// test case for multiple Number string
describe('String Calculator for multiple Number', () => {
    test('should return 6 when passed 1,5', () => {
        const calculator = new SmartCalculator();
        expect(calculator.multiply("1,5")).toBe(5);
    });
});

// test case for empty string
describe('String Calculator', () => {
    test('it should return 0 for an empty("") string', () => {
        const calculator = new SmartCalculator();
        expect(calculator.substract("")).toBe(0);
    });
});

// test case for multiple Number string
describe('String Calculator for multiple Number', () => {
    test('should return 5 when passed 10,5', () => {
        const calculator = new SmartCalculator();
        expect(calculator.substract("10,5")).toBe(5);
    });
});

// test case for empty string
describe('String Calculator', () => {
    test('it should return 0 for an empty("") string', () => {
        const calculator = new SmartCalculator();
        expect(calculator.division("")).toBe(0);
    });
});

// test case for multiple Number string
describe('String Calculator for multiple Number', () => {
    test('should return 2 when passed 10,5', () => {
        const calculator = new SmartCalculator();
        expect(calculator.division("10,5")).toBe(2);
    });
});