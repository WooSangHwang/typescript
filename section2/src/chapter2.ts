//배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im"];
let boolArr: Array<boolean> = [true, false, true];

//배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "heelo"];

//다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

//튜플 - 자바스크립트는 없으나, ts만 존재
//길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];
//ex 인텍스의 위치가 중요할경우
// const user: [string, number][] = [
//   ["이정환", 1],
//   ["황우상", 2],
//   [3, "최아무개"],
// ];
