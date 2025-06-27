/**
 * Pick<T, K>
 *   객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날글",
  content: "옛날 컨텐츠",
};

//직접구현
type Pick2<T, K extends keyof T> = {
  [key in K]: T[key];
};
