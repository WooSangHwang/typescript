/**
 * 함수 오버로딩
 * 하나의 함수드를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
 */

//버전들
//오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

//오버로드 구현부 => 구현 시그니처
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func();
func(1);
// func(1, 2);
func(1, 2, 3);
