{
  //abstraction: 1.interface  2.abstract
  // interface Vehicle1 {
  //     name: string;
  //     model: string
  // }

  // const vehicle1:Vehicle1 = {
  //     name: "Toyota",
  //     model: "2000"
  // }

   //abstraction using interface
  interface Vehicle2 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }
  //real implementation
  class Car1 implements Vehicle2 {
    startEngine(): void {
      console.log("I am starting car engine");
    }
    stopEngine(): void {
      console.log("I'm stopping the car engine");
    }
    move(): void {
      console.log("I'm moving the car");
    }
    test(): void {
      console.log("I'm testing");
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();


//abstraction using abstract keyword
  abstract class Car2  {
   abstract startEngine(): void
   abstract stopEngine(): void 
   abstract move(): void 
    test(): void {
      console.log("I'm testing");
    }
  }


  class ToyotaCar extends Car2{
    startEngine(): void {
        console.log("I am starting car engine");

    }
    stopEngine(): void {
        console.log("I'm stopping the car engine");
    }
    move(): void {
        console.log("I'm moving the car");
    }
  }
  const toyotaCar2 = new ToyotaCar();

  //
}
