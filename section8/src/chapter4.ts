/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

type ColorAnimal = `${Color}-${Animal}`;

//자동완성 기능을 사용시 모든 조합이 가능함
const colorAnimal: ColorAnimal = "black-cat";
