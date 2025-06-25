/**
 * 기본 타입간의 호환성
 *
 */
type Animal ={
    name:string;
    color:string;
}

type Dog = {
    name:string;
    color:string;
    breed:string;
}

let animal:Animal = {
    name: "기린",
    color: "yellow",
}

let dog : Dog = {
    name: "돌이돌이",
    color: "brown",
    breed:"진도"
}
animal = dog;
// dog = animal; 다운캐스팅되어 안됨;

type Book = {
    name : string;
    price:number;
}
type ProgrammingBook = {
    name:string,
    price:number;
    skill:string;
}

let book : Book;
let programmingBook: ProgrammingBook = {
    name: "책",
    price: 3333,
    skill: "react",
};

book = programmingBook;
console.log(book)

//그러나 초기화시 객체리터럴은 초과 프로퍼터검사대문에 안됨.
let book2 :Book = {
    name: "한입 크키 잘라",
    price:3000,
    // skill: "react", 초기화시 객체리터럴은 초과 프로퍼터검사대문에 안됨.

}