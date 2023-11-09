{
  {
    //union types
    type FrontendDeveloper = "FakibuzzDeveloper" | "JuniiorDeveloper";
    type FullstackDeveloper = "FrontendDeveloper" | "ExpertDeveloper";
    type Developer = FrontendDeveloper | FullstackDeveloper;
    const newDeveloper: Developer = "ExpertDeveloper";

    type User = {
      name: string;
      email?: string;
      gender: "Female" | "Male";
      bloodGroup: "A+" | "B+" | "AB+";
    };
    const user1: User = {
      name: "John",
      email: "john@gmail.com",
      gender: "Male",
      bloodGroup: "AB+",
    };
  }

  {
    //Intersection type
    type FrontendDeveloper = {
      skills: string[];
      designation1: "Frontend Developer";
    };
    type BackendDeveloper = {
      skills: string[];
      designation2: "Backend Developer";
    };
    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullstackDeveloper: FullstackDeveloper = {
      skills: ["HTML", "Node js"],
      designation1: "Frontend Developer",
      designation2: "Backend Developer",
    };
  }
}
