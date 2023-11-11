{
  //    OOP: class

  class Animal {
    //    public name: string;
    //    public species: string;
    //    public sound: string;

    //parameter properties

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }
    makeSound() {
      console.log(`The${this.name} sounds ${this.sound}`);
    }
  }
  const dog = new Animal("German Shepard", "dog", "gheu gheu");
  dog.makeSound();

  //
}
