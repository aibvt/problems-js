interface Shape { 
    area: () => number; 
  } 
   
  class Circle { 
    constructor(private radius: number) {} 
   
    area() { 
      return Math.PI * this.radius * this.radius; 
    } 
  } 
   
  class Rectangle { 
    constructor(private width: number, private height: number) {} 
   
    area() { 
      return this.width * this.height; 
    } 
  } 
   
  function sumOfAllAreas(...shapes: Shape[]): number { 
    return shapes.reduce((total, shape) => total + shape.area(), 0); 
  } 
   
  const circle1 = new Circle(2); 
  const circle2 = new Circle(3); 
  const rect1 = new Rectangle(2, 4); 
  const rect2 = new Rectangle(3, 2); 
   
  console.log(Math.floor(sumOfAllAreas(circle1, circle2))); 
  console.log(Math.floor(sumOfAllAreas(circle1, rect1)));