{
  //interface

  type User1 = {
    name: string;
    age: number;
  };
  //interface in object
  interface User2 {
    name: string;
    age: number;
  }
  type UserWithRole1 = User1 & { role: string };
  interface UserWithRole2 extends User2 {
    role: string;
  }
  const user1: UserWithRole1 = {
    name: "John",
    age: 23,
    role: "admin",
  };

  const user2: UserWithRole2 = {
    name: "John",
    age: 23,
    role: "agent",
  };

  //function and object  all of those are object type in js

  type RollNumber = number;
  type Roll1 = number[];
  //interface in array
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber1: Roll1 = [12, 324, 123, 45];
  const rollNumber2: Roll2 = [12, 324, 123, 45];

  type Add1 = (num1: number, num2: number) => number;
  const add1: Add1 = (num1, num2) => num1 + num2;
  // interface in function
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add2: Add2 = (num1, num2) => num1 + num2;
  //
}
