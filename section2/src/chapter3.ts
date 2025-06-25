//object
//객체 리터럴 타입
//구조적 타입 시스템
// id? => 선택적 프로퍼티 있어도 되고 없어도 되고..
let user: { id?: number; name: string } = {
  id: 1,
  name: "이정환",
};

user = {
  name: "홍길동",
};
//readonly
let config: { readonly apiKey: string } = {
  apiKey: "My API KEY",
};
//config.apiKey = "aaa";
