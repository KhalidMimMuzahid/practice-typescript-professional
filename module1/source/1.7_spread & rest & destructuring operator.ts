{

// spread operator
// destructuring operator
//rest operator


//spread operator 
const bros1:string[]=["Ashik", "Shohel", "Sweet"]
const bros2:string[]=["Shuvo", "Shakil", "Shanto"]
bros1.push(...bros2)
// const bros:string[]= [...bros1,...bros2]



const mentor1= {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan"
}
const mentor2= {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
}
const mentors= { ...mentor1, ...mentor2}

// learn rest operatror
const greetFriends= (...friends: string[])=>{
    friends.forEach((each: string)=>console.log(`Hi ${each}`))
}
// destructuring

// Object destructuring
const user= {
    id: 32,
    name: {
        firstName: "Khalid",
        middleName: "Mim",
        lastName: "Muzahid"
    },
    contact: "01716204599",
    address:"Rajshahi"
}
const {contact, name: {middleName}} = user

// array destructuring
const myFriends= ["Shuvo", "Shakil", "Ashik", "robin", "Al-amin"]
// const [,, bestFriend, ...rest] = myFriends
const [a,b, bestFriend, ...rest] = myFriends



}

