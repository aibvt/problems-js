class Calculator { 
    private value: number; 
   
    constructor(initialValue: number) { 
      this.value = initialValue; 
    } 
   
    add(arg: number): this { 
      this.value += arg; 
      return this; 
    } 
   
    subtract(arg: number): this { 
      this.value -= arg; 
      return this; 
    } 
   
    divide(arg: number): this { 
      this.value /= arg; 
      return this; 
    } 
   
    multiply(arg: number): this { 
      this.value *= arg; 
      return this; 
    } 
   
    logResult(): this { 
      console.log(this.value); 
      return this; 
    } 
  } 
   
  export default Calculator;