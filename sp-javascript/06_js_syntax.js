// 화살표 함수
// 여러 줄을 작성하고 싶다면 중괄호를 사용하되 return을 꼭 넣어주기
const add = (a,b)=>a+b;

console.log(add(3,5));

// 조건연산자 = 삼항연산자

const score = 85;
let grade =score>=80?"A":"B";

// if(score>=80){
//     grade ="A"
// }else{
//     grade="B"
// }

console.log(grade);

// 단축평가
// - 논리연산자를 활용(||, &&, ?., ??)

// (1) 논리합연산자(||)
// truthy, falsy
// falsy : false, &, "", null, undefined ,NaN
const getUserName = (user)=>{
    // if(!user.name){
    //     return "신원미상";
    // }

    return user.name || "신원미상"; //?
}
const person={
    age:30,
    // name:"르탄이",
}
console.log(getUserName(person))


// (2) 논리곱(&&) 연산자
// 좌변이 truthy한 값일 때만 우변을 평가

const loggedIn = true;
const userName = "르탄이";

loggedIn && console.log(`${userName}님 안녕하세요`);



// optional chaining
const user ={
    profile2:{
        name:"르탄이",
        details:{
            age:39,
            location:"서울시 강남구",
        }
    },
    printHello:()=>console.log("Hello")
    
}


// 없을 수도 있는 profile뒤에 ?를 붙이면 에러코드 대신 undefined가 출력됨
console.log(user.profile?.details.age);

const result = user.printHello1?.();
console.log(result);



// Null 병합 연산자 (??)

let userLocation = null;
// console.log(userLocation?userLocation:"없는 위치");
// userLocation이 존재하면 userLocation을 보여주고 없다면 우측의 값을 평가하라는 의미
console.log(userLocation??"없는 위치");


// Null 병합 연산자와 논리합 연산자(||)의 차이점

const displayPreferences =(preference)=>{
    // falsy한 값을 평가
    const textLength = preference.textLength ||50;
    console.log("1=>" , textLength);


    // Null 또는 undefined인 경우에만 값을 평가
    const itemsPerPage = preference.itemsPerPage??10;
    console.log("2=>",itemsPerPage);
}


const userPreference={
    textLength:0,
    itemPerPage:null,
}

displayPreferences(userPreference);