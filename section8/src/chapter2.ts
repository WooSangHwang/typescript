/**
 * keyof 연산자
 *
 */

interface Person {
  name: string;
  age: number;
}

//key : "name"|"age" => key : keyof Person
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "황우상",
  age: 32,
};
const person2 = {
  name: "황우상",
  age: 32,
};

getPropertyKey(person, "name");

//typeof를 이용하면 역으로 type을 뽑을 수 있음
type Person2 = typeof person2;

//keyof `typeof person2` ==>  keyof `Person2`
function getPropertyKey2(person2: Person2, key: keyof typeof person2) {
  return person2[key];
}
