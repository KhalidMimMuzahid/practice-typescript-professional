{
    //Problem 1
    const checkType = (sample: string | number): number | undefined => {
      if (typeof sample === "number") {
        return sample * sample;
      } else if (typeof sample === "string") {
        return sample.length;
      }
    };
    console.log(checkType(-10));
  
    //
  }
  {
    //problem 2
    interface Person {
      phone?: string;
      address?: {
        city?: string;
        street?: string;
      };
    }
    const getAddressCity = (person: Person): string | undefined => {
      return person?.address?.city;
    };
    console.log(
      getAddressCity({
        phone: "017116204599",
        address: {
          city: "Rajshahi",
          street: "Rajshahi-Dhaka",
        },
      })
    );
  }
  
  {
    //problem 3
  
    class Animal {
      name: string;
      species: string;
      color: string;
      constructor(name: string, species: string, color: string) {
        this.name = name;
        this.species = species;
        this.color = color;
      }
    }
    class Cat extends Animal {
      constructor(name: string, species: string, color: string) {
        super(name, species, color);
      }
    }
    //   class Cow extends Animal {
    //     constructor(name: string, species: string, color: string) {
    //       super(name, species, color);
    //     }
    //   }
    type message = "yes, it's a cat." | "no, it's not a cat.";
    const isCat = (animal: Cat): message => {
      if (animal instanceof Cat) {
        return "yes, it's a cat.";
      } else {
        return "no, it's not a cat.";
      }
    };
  
    const cat1 = new Cat("Dark Cat", "Cat", "Black");
    //   const cow1 = new Cow("Red Cow", "Cow", "Red");
    console.log(isCat(cat1));
    //   console.log(isCat(cow1));
  }
  
  {
    // problem 4
    type List = (string | number)[];
    const list: List = [5, "ten", 15, "twenty", 25, "thirty", 35, "fourty"];
    const addTotalNumber = (list: List): number => {
      const total: number = list.reduce(function (
        total: number,
        currentValue: string | number
      ) {
        if (typeof currentValue === "number") {
          return total + currentValue;
        } else {
          return total;
        }
      },
      0);
  
      return total;
    };
    console.log(addTotalNumber(list));
  }
  
  {
    //problem 5
    interface Car {
      madeIn: string;
      model: string;
      year: number;
    }
  
    interface Driver {
      name: string;
      licenseNumber: number;
    }
  
    const combinedCarDriver = (car: Car, driver: Driver) => {
      type CarDriver = Car & Driver;
      const carDriver: CarDriver = { ...car, ...driver };
      return carDriver;
    };
  
    console.log(
      combinedCarDriver(
        { madeIn: "Japan", model: "Premio", year: 2013 },
        { name: "Khalid", licenseNumber: 36545575454 }
      )
    );
  }
  
  {
    //problem 6
    const calculateArrayOfNumbers = (param: unknown) => {
      const isNumberOfArray: boolean =
        Array.isArray(param) &&
        param.length > 0 &&
        param.every((param) => {
          return typeof param === "number";
        });
      if (isNumberOfArray) {
        const total = (param as number[]).reduce(
          (total: number, currentValue: number) => total + currentValue,
          0
        );
        return total;
      } else {
        const error = new Error(
          "You can't calculate the sum of this array, cause it's not a array of number"
        );
        return error;
      }
    };
  
    console.log(calculateArrayOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  }
  
  {
    //problem 7
  //   type Array = any[];
    const findFirstOccurrence = <T>(
      array: T[],
      searchValue: T
    ): number => {
      const index = array.findIndex((each) => each === searchValue);
      return index;
    };
  
    console.log(
      findFirstOccurrence<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)
    );
  }
  
  {
      //problem 8
  }
  