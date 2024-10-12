//  smart calculator class to test

class SmartCalculator {
    add(numbers) {
        if(numbers=="") return 0;
        let numArr=numbers.split(",").map(Number)
        let sum=0;
        for(let i=0;i<numArr.length;i++){
            sum+=numArr[i]
        }
        return sum;
        
    }
  }
  
  module.exports = SmartCalculator;
  