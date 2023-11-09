{
//Type Alias
type Student ={
    name: string;
    age: number;
    grade: number;
    id: number;
    email?: string;
    phone?: string;
    address: string;
}
const student1:Student={
    name: "Khalid",
    age: 23,
    grade: 9,
    id: 123456789,
    email: "khalid@gmail.com",
    phone: "0123456789",
    address: "123 Main Street"
}
const student2:Student={
    name: "Joy",
    age: 26,
    grade: 5,
    id: 124534329,
    email: "khalid2@gmail.com",
    phone: "0123456789",
    address: "123 Main Street"
}
const student3:Student={
    name: "Robin",
    age: 23,
    grade: 9,
    id: 123456789,
    email: "khalid1@gmail.com",
    phone: "012356454",
    address: "123 Main Street"
}


// type alias in function
type Add=(num1: number, num2: number)=>number;
const add:Add =(num1, num2) => num1+num2;

}