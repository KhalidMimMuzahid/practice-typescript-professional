{
  // type guard using instance

  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("I'm making sound");
    }
  }
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBurk() {
      console.log("I'm making burk");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I'm making Meaw");
    }
  }

  //   const getAnimal = (animal: Animal) => {
  //     if (animal instanceof Dog) {
  //       animal.makeBurk();
  //     } else if (animal instanceof Cat) {
  //       animal.makeMeaw();
  //     } else {
  //       animal.makeSound();
  //     }
  //   };

  //   smart way te handle korar jonne  chaile amra function use korte pari
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };
  // type guard or type narrowing is  the same thing
  const getAnimal = (animal: Animal) => { 
    if (isDog(animal)) {
      animal.makeBurk();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };
  const dog1 = new Dog("Doggy", "Dog");
  const cat1 = new Cat("Chita", "Cat");
  getAnimal(dog1)
  getAnimal(cat1)
  //
}
