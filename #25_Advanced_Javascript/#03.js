function Calculator(value) {
    this.result = value;
  
    // Arithmetic operations with chaining
    this.add = function(num) {
      this.result += num;
      return this;
    };
  
    this.subtract = function(num) {
      this.result -= num;
      return this;
    };
  
    this.multiply = function(num) {
      this.result *= num;
      return this;
    };
  
    this.divide = function(num) {
      if (num === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      this.result /= num;
      return this;
    };
  
    // Get the final result
    this.getResult = function() {
      return this.result;
    };
}

const calc = new Calculator(10)
  .add(5)
  .subtract(3)
  .multiply(2)
  .divide(2);

const finalResult = calc.getResult();
console.log(finalResult); // Output: 4  