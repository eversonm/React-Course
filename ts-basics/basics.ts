let age: number = 1;

let username: string = "111";

let tBool: boolean = false;

let hobbies: string[] = [];

type Person = {
  name: string;
  age: number;
};

let person: Person;

let people: Person[];

//Type inference

let course: string | number = "React";

course = 1234;

//Functions and types

function addP(a: number, b: number): number | string {
  return a + b;
}
