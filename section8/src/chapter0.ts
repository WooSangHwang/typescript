/**
 * 인덱스드 엑세스 타입
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}
//인덱스 엑세스 타입 Post["author"]
// Post["author"] => "author" 타입만 가능 문자열, 변수 불가.
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "황우상",
    age: 1,
  },
};

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];
//배열 타입
const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "황우상",
    age: 1,
  },
};

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
