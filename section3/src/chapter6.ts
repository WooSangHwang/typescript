/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};
//타입 단언 assertion
let person = {} as Person;
person.name = "황우상";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언 의 규칙
 * 값 as 단언 <-단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string; //서로 겹치는 부분이 없기 때문에 오류
/**
 * const 단언
 */

let num4 = 10 as const;
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// cat.name = ""; const시 readonly로 됨

/**
 * Non null 단언
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글 1",
  author: "이정환",
};

const len: number = post.author!.length;
