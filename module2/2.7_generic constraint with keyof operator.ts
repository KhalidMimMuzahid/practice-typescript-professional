{
  //generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner = "bike" | "car" | "ship"; //manually
  type Owner2 = keyof Vehicle;

  const person: Owner = "bike";
  const person2: Owner2 = "ship";

  const user = {
    name: "Mr. Smith",
    age: 18,
    address: "Raj",
  };
//   user["name"]  --> "Mr. Smith",
const car={
    brand: "Toyota",
    model: "Premeo 2500",
}

const getPropertyValue=<X,Y extends keyof X>(obj:X, key:Y)=>{
return obj[key]
}

const result1 = getPropertyValue(user, "name")
const result2 = getPropertyValue(car,"model")
  //
}
