//enum 타입
//여려가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["engilsh"] = "en";
})(Language || (Language = {}));
const user = {
    name: "홍길동",
    role: Role.ADMIN,
    language: Language.korean,
};
export {};
