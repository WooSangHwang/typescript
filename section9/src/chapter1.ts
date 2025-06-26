/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
//아래 코드 처럼 해석되어 union 하게됨
//StringNumberSwitch<number> |
//StringNumberSwitch<string>

let d: StringNumberSwitch<boolean | number | string>;
//1단계
//StringNumberSwitch<boolean> |
//StringNumberSwitch<numberl> |
//StringNumberSwitch<string>

//2단계
// number |
// string |
// number

//결과
//number | string

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
//1 단계
//Exclude<number, string> |
//Exclude<string, string> |
//Exclude<boolean, string>

//2단계
// number |
// never |
// boolean

//결과
// number | never | boolean ==> union 타입에 never가 포함되어 있으면 사라짐
// ==> number | boolean ==> never는 집합관계에서 공집합이기때문에...

//
type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
//1단계
//Extract<number ,string> |
//Extract<string ,string> |
//Extract<boolean ,string>

//2단계
//never |
//string |
//never |

// 결과
// string
