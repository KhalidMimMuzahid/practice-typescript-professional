{

// learning function
// Normal function
// arrow function

function add(num1:number,num2:number): number{
    return num1+num2
}

add(5, 10)

const addArrow= (num1:number,num2:number): number => num1+num2

//object --> function --> method

const poorUser ={
    name :"Khalid",
    balance: 0,
    addBalance(balance:number):number{
        return this.balance+balance
    }
}
const arr: number[]= [1,2,3,4,5,6,7,8,9]
const newArray:number[]= arr.map((each:number)=> each*each)

}