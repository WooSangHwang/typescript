/**
 * 함수 타입 정의
 */

function func(a: number, b: number): number {
  return a + b;
}

const add = (a: number, b: number): number => a + b;

function introduce(name = "황우상", tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
  console.log(`tall : ${tall}`);
}

introduce("우상");
introduce("우상", 174);

function getSum(...rest: number[]): number {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
