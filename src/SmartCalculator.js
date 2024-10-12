//  smart calculator class to test

class SmartCalculator {
    add(numbers) {
        if (numbers == "") return 0;
        let numArr = numbers.split(",").map(Number)
        let sum = 0;
        for (let i = 0; i < numArr.length; i++) {
            sum += numArr[i]
        }
        return sum;

    }
    multiply(numbers) {
        if (numbers == ""||numbers==0) return 0;
        let numArr = numbers.split(",").map(Number)
        let mul = 1;
        for (let i = 0; i < numArr.length; i++) {
            mul *= numArr[i]
        }
        return mul;

    }
    substract(numbers) {
        if (numbers == ""||numbers==0) return 0;
        let numArr = numbers.split(",").map(Number)
     
        return numArr[0]-numArr[1];

    }

    division(numbers) {
        if (numbers == "") return 0;
        let numArr = numbers.split(",").map(Number)
      
        return numArr[0]/numArr[1];

    }
}

module.exports = SmartCalculator;
