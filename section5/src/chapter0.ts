/**
 * 인터페이스
 */

interface Person {
  readonly name: String;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}
const person: Person = {
  name: "황우상",
  age: 32,
  sayHi() {},
};
