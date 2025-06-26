/**
 * 인터페이스 확장
 */

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  name: string;
  isBark: boolean;
}
interface Cat extends Animal {
  isScratch: boolean;
}

const dog: Dog = {
  name: "hello",
  age: 0,
  isBark: true,
};
// 다중확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  age: 0,
  isBark: true,
  isScratch: true,
};
