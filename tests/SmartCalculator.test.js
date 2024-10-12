//  import smart calculator

const SmartCalculator = require('../src/SmartCalculator');


// test case for empty string

describe('String Calculator', () => {
  test('it should return 0 for an empty("") string', () => {
    const calculator = new SmartCalculator();
    expect(calculator.add("")).toBe(0);
  });
});


describe('String Calculator for Single Number', () => {
    test('should return 1 when passed 1', () => {
      const calculator = new SmartCalculator();
      expect(calculator.add(1)).toBe(1);
    });
  });