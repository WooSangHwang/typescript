/**
 * 클래스
 */

let studentA = {
  name: "황우상",
  grade: "A",
  age: 32,
  study() {
    console.log("열심히 함");
  },
  introduce() {
    console.log("하위");
  },
};

//클래스
class Student {
  //필드
  name;
  grade;
  age;

  //생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  //메서드
  study() {
    console.log("열심히 함");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name}`);
  }
}
//클래스를 이용해서 만든 객체 -> 인스턴스
let studentB = new Student("황우", "B", 322);
console.log(studentB);
studentB.study();
studentB.introduce();

//상속
class StudentDeveloper extends Student {
  favoriteSkill;
  programing() {
    console.log(`${this.favoriteSkill}프로그래밍 함`);
  }

  //생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }
}
let studentC = new StudentDeveloper("황", "a", 10, "typeScript");
console.log(studentC);
