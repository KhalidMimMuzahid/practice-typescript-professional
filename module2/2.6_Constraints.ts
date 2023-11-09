{
  // Constraints

  const addCourseToStudent = <
    T extends {
      id: number;
      name: string;
      email: string;
    }
  >(
    student: T
  ) => {
    const course = "Next level web development";
    return { ...student, course };
  };

  const student1 = addCourseToStudent({
    id: 222,
    name: "Mr. X",
    email: "mrx@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 444,
    name: "Mr. Y",
    email: "mry@gmail.com",
    hasWatch: "Apple Watch",
  });

  const student3 = addCourseToStudent({
    id: 666,
    name: "Mr. Y",
    email: "y@gmail.com",
    emni: "emni",
  });
  //
}
