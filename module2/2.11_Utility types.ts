{
  //Utility types
  //types of utility:  Pick, Omit, Required, Partial, readonly, Record  etc...
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  // Pick
  type name = Pick<Person, "name" | "age">;
  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;
  //Required
  type PersonRequired = Required<Person>;
  //Partial
  type PersonPartial = Partial<Person>;
  // readonly
  type PersonReadonly = Readonly<Person>;
  const person1: PersonReadonly = {
    name: "John",
    age: 30,
    contactNo: "9876543210",
  };
  // person1.name = "Khalid"

  //Record
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };
  type MyObj = Record<string, string>;
  const obj1: MyObj = {
    a: "a",
    b: "b",
    c: "c",
    d: "7",
  };
  const EmptyObj: Record<string, unknown> = {
    name: "Khalid",
    age: 30,
    isMarried: false,
  };
  //
}
