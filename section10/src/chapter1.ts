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

/**
 * Required<T>
 *   특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const withThumbnailPost: Required<Post> = {
  title: "한입",
  tags: ["ts"],
  content: "gg",
  thumbnailURL: "aa",
};

//직접구현 -?를 추가하면 됨
type Required2<T> = {
  [key in keyof T]-?: T[key];
};

/**
 * Readonly<T>
 *   특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const readonlyPost: Readonly<Post> = {
  title: "보호된 글",
  tags: [],
  content: "",
};

// readonly 처리됨
// readonlyPost.content = "";

//직접 구현
type Readonly2<T> = {
  readonly [key in keyof T]: T[key];
};
