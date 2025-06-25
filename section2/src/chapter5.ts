//enum 타입
//여려가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}
enum Language {
  korean = "ko",
  engilsh = "en",
}
const user = {
  name: "홍길동",
  role: Role.ADMIN,
  language: Language.korean,
};
