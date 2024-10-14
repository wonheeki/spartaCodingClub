// 객체 : key - value
// JSON(JavaScript Object Notation)

const user ={
    name: "르탄이",
    age :30, 
    isAdmin :true,
    printHello:()=> console.log("hello"),
}


// 객체 접근 : 괄호 표기법
// const attibute = "name";
// console.log(user[attibute]);

// 객체 접근 : 점 표기법(.)
// console.log(user.name);
// console.log(user.age);
// user.printHello();


user.email ="jay@gmail.com"; // 추가
user.age = 31; // 수정
delete user.isAdmin; // 삭제

console.log(user);