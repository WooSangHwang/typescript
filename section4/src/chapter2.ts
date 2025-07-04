/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단.
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호횐되는가
 */

//1. 반환값이 호환되되는가
type A = () => number;
type B = () => 10;
let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; 리턴값의 다운 캐스딩이 되어 안됨.

//2. 매개변수가 호환되는가
// 2-1. 매개변수가 같을때
type C = (value: number) => void;
type D = (value: 10) => void;
let c: C = (value) => {};
let d: D = (value) => {};

// c = d; //매개변수가 객체일경우 자식 객체의 프로퍼티를 접근을 해야 하기때문에 downcast만 된다.
d = c;

// 2-2. 매개변수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;
let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; //매개 변수의 개수가 다를땐 매개변수가 더 적을때 가능하다.
