{
  //generic type
  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[]=[3,5,8]
  //   const rollNumbers: Array<number> = [3, 5, 8];
  const rollNumbers: GenericArray<number> = [3, 5, 8];

  // const mentors:string[] =["Mr. X", "Mr. Y", "Mr. Z"]
  //   const mentors: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolArray:boolean[]=[true, false, true]
  //   const boolArray: Array<boolean> = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Khalid",
      age: 27,
    },
    {
      name: "Jhanker Mahbub",
      age: 40,
    },
  ];
  //generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const manush: [string, string] = ["Mr. X", "Mr. Y"];

  type User = {
    name: string;
    email: string;
  };
  const userWithID: GenericTuple<number, User> = [
    1234,
    { name: "Khalil", email: "kholil@gmail.com" },
  ];

  //
}
