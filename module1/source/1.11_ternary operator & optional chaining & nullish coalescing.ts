{
  {
    //ternary operator || optional chaining || nullish coalescing
    const age: number = 25;

    if (age >= 18) {
      console.log("adult");
    } else {
      console.log("Not adult");
    }

    //ternary operator
    const isAdult: boolean = age >= 18 ? true : false;
    console.log({ isAdult });
  }

  {
    //nullish coalescing operator
    // null / undefined ---> decision making
    const isAuthenticated = undefined;
    const user1 = isAuthenticated ?? "Guest";
    const user2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ user1 }, { user2 });
  }

  {
    //Optional chaining
    type User = {
      name: string;
      address: {
        city: string;
        state: string;
        presentAddress: string;
        permanentAddress?: string;
      };
    };
    const user: User = {
      name: "John",
      address: {
        city: "Bangalore",
        state: "Karnataka",
        presentAddress: "123 Main Street",
        // permanentAddress: "Kashipur"
      },
    };
    const permanentAdress =
      user?.address?.permanentAddress ?? "No Permanent Address";
    console.log({ permanentAdress });
  }
}
