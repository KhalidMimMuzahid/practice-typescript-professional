{
  //promise
  //simulate
  type Something = { something: string };
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };
  const showData = async (): Promise<Something> => {
    const promise1: Something = await createPromise();
    // console.log(promise1)
    return promise1;
  };
  showData();



  type ToDo={ userId: number, id: number, title: string, completed: boolean }
  const getToDOList = async ():Promise<ToDo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    // console.log(data)
    return data;
  };
  getToDOList();
  //
}
