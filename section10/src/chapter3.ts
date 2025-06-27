/**
 * Exclude<T, U>
 *   T에서 U를 제거하는 타입
 */
type A = Exclude<string | boolean, boolean>;
//직접구현
type Exclude2<T, U> = T extends U ? never : T;

/**
 * Exclude<T, U>
 *   T에서 U를 추출하는 타입
 */
type B = Extract<string | boolean, boolean>;
//직접구현
type Extract2<T, U> = T extends U ? T : never;

/**
 * ReturnType<T>
 * 함수의 반환값 타입을 추출하는 타입
 */

function funcA() {
  return "hello";
}
function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;

//직접 구현하기
type ReturnType2<T extends (...args: any) => any> = T extends (
  ...agrs: any
) => infer R
  ? R
  : never;
