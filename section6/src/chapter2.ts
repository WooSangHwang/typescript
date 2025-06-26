/**
 * 접근제어
 * public private proted
 */

/**
 * 타입스크립트 클래스
 */

const employee = {
  name: "황우상",
  age: 32,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  //필드 // 생성자에 접근 제어자를 입력할경우 필드가 자동생성되며, 자동으로 초기화됨
  constructor(
    public name: string,
    private age: number,
    protected position: string,
  ) {}

  //메서드
  work() {
    console.log("일함");
  }
}
