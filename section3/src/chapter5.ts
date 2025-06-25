/**
 * 타입 추론
 */
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "황우상",
  profile: {
    nickname: "idol",
  },
  url: ["ggg"],
};

let { id, name, profile, url } = c;

function func(message = "aa") {
  return "hello";
}

//any 타입의 진화..
let d;
d = 10;
d = "hello";

//리터럴로 추론됨 const(상수)이기때문에
const num = 10;

let arr = [1, "string"];
