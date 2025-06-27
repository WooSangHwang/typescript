/**
 * Partial<T>
 *   -> 부분적인, 일부부분의
 *   -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const draft: Partial<Post> = {
  title: "제목은 나중에",
  content: "초안",
};
//Partial 직접 구현
type Partial2<T> = {
  [key in keyof T]?: T[key];
};
