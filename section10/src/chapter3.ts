/**
 * Exclude<T, U>
 *   T에서 U를 제거하는 타입
 */
type A = Exclude<string | boolean, boolean>;
//직접구현
type Exclude2<T, U> = T extends U ? never : T;
