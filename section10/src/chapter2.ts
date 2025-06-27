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

/**
 * Omit<T, K>
 *   생략하다,, 빼다
 *   객체 타입으로부터 특정 프로퍼트를 제거하는 타입
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}
//Pick
const noTitlePost: Pick<Post, "content" | "tags" | "thumbnailURL"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

//Omit
const noTitlePost2: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

//직접 구현하기
type Omit2<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnail' >

/**
 * Recode<K, V>
 */

type ThumbnailLegacy = {
  large: { url: string };
  medium: { url: string };
  small: { url: string };
};

type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;

//직접만들기 any의 키 값이야..
type Record2<K extends keyof any, V> = {
  [key in K]: V;
};
