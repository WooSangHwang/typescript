//any
//특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {};
anyVar.toUpperCase();
let num: number = 10;
num = anyVar;

//nuknown
let unKnownVar: unknown;
unKnownVar = "";
unKnownVar = 1;
unKnownVar = () => {};

//num = unKnownVar; 불가능
//unKnownVar.toUpperCase(); 불가능
//정제할경우 가능
if (typeof unKnownVar === "number") {
  num = unKnownVar;
}
