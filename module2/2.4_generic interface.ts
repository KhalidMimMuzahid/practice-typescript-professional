{
  //Generic with interface

  interface Developer<T,X=null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releasedYear: number;
    };
    smartWatch: T;
    bike?: X
  }
  interface XioamiWatch {
    brand: string;
    model: string;
    display: string;
  }
  const poorDeveloper: Developer<XioamiWatch> = {
    name: "Khalid",
    computer: {
      brand: "hp",
      model: "pavilion",
      releasedYear: 2013,
    },
    smartWatch: {
      brand: "Xioami",
      model: "Kieslect Kr",
      display: "amoled",
    },
  };

  interface appleWatch {
    brand: string;
    model: string;
    heartTracking: boolean;
    sleepTracking: boolean;
  }
  interface yamahaBike{
    brand: string,
    engine: string
}
  const richDeveloper: Developer<appleWatch, yamahaBike> = {
    name: "richDev",
    computer: {
      brand: "Apple",
      model: "Mackbook Pro",
      releasedYear: 2013,
    },
    smartWatch: {
      brand: "Apple",
      model: "i-watch Pro",
      heartTracking: true,
      sleepTracking: true,
    },
    bike:{
        brand: "Yamaha",
        engine: "1000 cc"
    }
  };
  //
}
