{
  //OOP: Inheritence

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours} hours`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const student1 = new Student("Khalid", 26, "Rajshahi");
  student1.getSleep(8);
  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClass: number) {
      console.log(`${this.name} take class ${numberOfClass} times`);
    }
  }
  const teacher1 = new Teacher("Rakhib", 40, "Dhaka", "CSE Head");
  teacher1.getSleep(8);
  teacher1.takeClass(4);

  //
}
