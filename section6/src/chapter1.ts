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
  //필드
  name: string;
  age: number;
  position: string;
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log("일함");
  }
}
//상속
class ExecutiveOfficer extends Employee {
  //필드
  officeNumber: number;
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number,
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("황", 32, "developer");
console.log(employeeB);

//타입의 클래스는 타입으로 활용될 수 있음
const employeeC: Employee = {
  name: "gg",
  age: 2,
  position: "gg",
  work() {},
};
