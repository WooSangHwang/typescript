/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

type Admin = { tag: "ADMIN"; name: string; kickCount: number };
type Member = { tag: "MEMBER"; name: string; point: number };
type Guest = { tag: "GUEST"; name: string; visitCount: number };

type User = Admin | Member | Guest;

//Admin -> {name}님 현재까지 {kickcount}명 강퇴했습니다.
//Member -> {name}님 현재까지 {point}모았습니다
//Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  // if ("kickCount" in user) {
  //   console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  // } else if ("point" in user) {
  //   console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  // } else {
  //   console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하였습니다.`);
  // }

  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(
        `${user.name}님 현재까지 ${user.visitCount}번 방문하였습니다.`,
      );
      break;
    }
  }
}

/**
 * 복습겹 한가지 더 사례
 */

type AsyncTask = {
  state: "LOADING" | "FAILED" | "SUCCESS";
  error?: {
    message: string;
  };
  response?: {
    data: string;
  };
};

// 비동기 작업의 결과를 처리하는 객체
const loding: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류발생",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터",
  },
};

//? (옵셔널) 조건이 들어가야 오류가 발생안됨 하지만 분리를 할경우 아래처럼 가능
// function processResult(task: AsyncTask) {
//   switch (task.state) {
//     case "LOADING":
//       console.log("로딩중");
//       break;
//     case "FAILED":
//       console.log(`에러 발상 : ${task.error?.message}`);
//       break;
//     case "SUCCESS":
//       console.log(`성공 : ${task.response?.data}`);
//       break;
//   }
// }
//분리후
type LoadingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask2 = LoadingTask | FailedTask | SuccessTask;

//분리 후
function processResult(task: AsyncTask2) {
  switch (task.state) {
    case "LOADING":
      console.log("로딩중");
      break;
    case "FAILED":
      console.log(`에러 발상 : ${task.error.message}`);
      break;
    case "SUCCESS":
      console.log(`성공 : ${task.response.data}`);
      break;
  }
}
