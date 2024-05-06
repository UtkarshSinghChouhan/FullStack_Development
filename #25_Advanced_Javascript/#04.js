class Shape {
    constructor() {
      if (this.constructor === Shape) {
        throw new Error("Shape is an abstract class and cannot be instantiated directly.");
      }
    }
  
    draw() {
      // Base implementation (can be overridden by subclasses)
      console.log("Drawing a shape...");
    }
}
  
class Circle extends Shape {
    draw() {
      console.log("Drawing a circle...");
    }
}
  
class Rectangle extends Shape {
    draw() {
      console.log("Drawing a rectangle...");
    }
}
  
// Polymorphism demonstration
function drawShape(shape) {
    shape.draw();
}
  
const circle = new Circle();
const rectangle = new Rectangle();

drawShape(circle);  // Output: Drawing a circle...
drawShape(rectangle); // Output: Drawing a rectangle...
  