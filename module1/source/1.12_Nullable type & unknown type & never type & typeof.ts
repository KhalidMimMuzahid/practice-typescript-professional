{
  {
    //Nullable type
    const searchName = (value: string | null) => {
      if (value) {
        console.log("Searching");
      } else {
        console.log("There is nothing to search");
      }
    };
    searchName(null);
  }

  {
    //unknown type   and typeof for type checking
    const getSpeedInMeteePerSecond = (value: unknown) => {
      if (typeof value === "number") {
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`the speed is ${convertedSpeed} m/s`);
      } else if (typeof value === "string") {
        const [speed, unit] = value.split(" ");
        const convertedSpeed = (Number(speed) * 1000) / 3600;
        console.log(`the speed is ${convertedSpeed} m/s`);
      } else {
        console.log("Wrong input");
      }
    };
    getSpeedInMeteePerSecond("1000  m/s");
  }

  // never type
  const throwError = (message: string): never => {
    throw new Error(message);
  };
  throwError("Muskil se error hogaya");
}
