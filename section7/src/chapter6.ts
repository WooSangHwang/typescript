/**
 * 프로미스
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve("ㅁㄴ"); 제네릭 타입 따짐
    // resolve(10);
    reject("~~~ 때문에");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); //20
});
promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 *
 */
interface Post {
  id: number;
  title: string;
  content: string;
}

// 1.return 값을 제네릭정의 해도 됨 => new Promise<Post>
// 2. 함수의 결과 값으로 제네렉 선언 해도 됨 =:> function fetchPost() : Promise<Post> {...
//협업 관점에서 함수의 반환 결과값을 선언하는 것이 더 가독성이 좋음 (2번 추천)
function fetchPost(): Promise<Post> {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();
postRequest.then((post) => {
  post.id;
});
