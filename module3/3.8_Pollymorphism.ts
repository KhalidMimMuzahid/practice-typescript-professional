{
  //Polymorphism

  class Person {
    getSleep() {
      console.log("I'm sleeping for 8 hours a day");
    }
  }
  class Student {
    getSleep() {
      console.log("I'm sleeping for 7 hours a day");
    }
  }
  class Developer {
    getSleep() {
      console.log("I'm sleeping for 6 hours a day");
    }
  }
  function getSleepingHours(param: Person) {
    param.getSleep();
  }
  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
    getArea(): number {
      return this.width*this.height
    }
  }




  const getShapeArea=(param:Shape)=>{
    console.log(param.getArea())
  }
  const shape1 = new Shape()
  const shape2 = new Circle(10)
  const shape3 = new Rectangle(10,10)
  console.log(shape1.getArea())
  console.log(shape2.getArea())
  console.log(shape3.getArea())
  

  //
}
