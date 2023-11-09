{
  //Mapped types
  {
    const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
    // const arrayOfStrings:string[] = ["1", "2", "3", "4", "5"]
    const arrayOfStrings: string[] = arrayOfNumbers.map((number: number) =>
      number.toString()
    );
    console.log(arrayOfStrings);
  }

  type AreaNumber = {
    width: number;
    height: number;
  };

  // type height = AreaNumber["height"]; // look up type
  //   type AreaString={
  //     width:string,
  //     height:string
  //   }
  //   type AreaString<T> = {
  //     [key in keyof AreaNumber]: string;
  //   };

  //   const area: AreaString<{
  //     width: string;
  //     height: string;
  //   }> = {
  //     width: "100",
  //     height: "100",
  //   };
  type AreaString<T> = {
    [key in keyof T]: T[key]; // mapped type is used here
  };

  const area: AreaString<{
    width: string;
    height: number;
  }> = {
    width: "100",
    height: 100,
  };

  //
}
