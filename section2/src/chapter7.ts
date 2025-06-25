//void
//void => 공허 => 아무것도 없다.

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}
let a: void;
// a = 1; 불가능
// a = "hello"; 불가능
// a = {}; 불가능
a = undefined;

//never
//never -> 존재하지 않는
//불가능한 타입

function func3(): never {
  while (true) {}
}
function func4(): never {
  throw new Error();
}
let anyVar: any;
let b: never;
//어떠한 값도 담을 수 없다.
// b = 1;
// b = {};
// b = anyVar;
