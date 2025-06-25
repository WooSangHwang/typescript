//object
//객체 리터럴 타입
//구조적 타입 시스템
// id? => 선택적 프로퍼티 있어도 되고 없어도 되고..
let user = {
    id: 1,
    name: "이정환",
};
user = {
    name: "홍길동",
};
//readonly
let config = {
    apiKey: "My API KEY",
};
export {};
//config.apiKey = "aaa";
