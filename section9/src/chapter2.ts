/**
 * infer
 * inference -> 추론하다
 * infer는 비교 대상을 최대한 추론하게 하는 문법
 * 즉
 * ex1) () => string extends () => infer R이  참이 되기 위해 R은 string으로 추론한다.
 * ex2) T extends Promise<infer R>는 T가 Promise<number>라면 infer R을 추론을 통해 number로 추론하게 된다.
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? string : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>;

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;
