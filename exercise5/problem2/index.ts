function printNumberInInterval(n: number): void { 
    let count = 1; 
   
    const intervalId = setInterval(() => { 
      console.log(count); 
   
      if (count === n) { 
        clearInterval(intervalId); 
      } 
   
      count++; 
    }, 1000); 
  } 
   
  export default printNumberInInterval;