{
  //Function with generics
  const createArray = (param: string) => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const result1 = createArray("Bangladesh");
  const resultGeneric = createArrayWithGeneric<string>("Bangladesh");
  type Country = { id: number; name: string };
  const resultGenericObject = createArrayWithGeneric<Country>({
    id: 1,
    name: "Bangladesh",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };
  const result2 = createArrayWithTuple("Bangladesh", 100);

  const result3 = createArrayWithTuple<number, { name: string }>(100, {
    name: "Bangladesh",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level web development";
    return { ...student, course };
  };

  const student1 = addCourseToStudent<{
    name: string;
    email: string;
    devType: string;
  }>({
    name: "Mr. X",
    email: "mrx@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    name: "Mr. Y",
    email: "mry@gmail.com",
    hasWatch: "Apple Watch",
  });

  //
}
