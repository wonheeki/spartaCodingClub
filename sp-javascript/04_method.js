// 객체
// (1) Object.keys()
const user={
    name:"르탄이",
    age:30,
    isAdmin : true,
};
const keys = Object.keys(user);
console.log(keys);

// (2) Object.values90
const values = Object.values(user);
console.log(values);

// (3) entries : key와 value를 배열로 묶어서 출력
const entries = Object.entries(user);
console.log(entries);

// (4) assign : 원본 객체에 추가적인 객체의 속성을 복사함 
const userDetails={
    occupation :"개발자",

}
Object.assign(user,userDetails);
console.log(user);


// 배열
// push, pop
const fruits=["apple", "banana"];
console.log(fruits);

fruits.push("orange");
console.log(fruits);

const lastFruit = fruits.pop();
console.log("---------------------");
console.log(lastFruit);
console.log(fruits);


// map : 원본 배열에서 각 요소를 가공한 "새로운 배열" 을 리턴하는 함수

// 1) 배열 내의 모든 요소 각각에 대해
// 2) 주어진 함수를 호출한 결과를 모아
// 3) 새로운 배열을 반환

const numbers=[1,2,3,4,5];
const squared=numbers.map((num)=>{
    return num*num; // 매우중요 return이 필수
});

// [ 1, 4, 9, 16, 25 ]
console.log(squared);



// filter
const evenNumbers = numbers.filter((num)=>{
    return num%2===0;
});

console.log(evenNumbers);


const 동영상리스트 =[
    {
        아이디 : 1, 
        제목:"동영상01", 
        썸네일이미지 : "image01.jpg"
    },
    {
        아이디 : 2, 
        제목:"동영상02", 
        썸네일이미지 : "image02.jpg"
    },
    {
        아이디 : 3, 
        제목:"동영상03", 
        썸네일이미지 : "image03.jpg"
    }
];

const 필터링된동영상리스트 = 동영상리스트.filter((영상)=>{
    return 영상.제목 ==="동영상02";
})

console.log(필터링된동영상리스트);


// reduce : 누적기
const result = numbers.reduce((누적된값,일반값)=>{
    console.log("--------------");
    console.log(누적된값);
    console.log(일반값);

    return 누적된값+일반값;
});

console.log("result => ", result);


// sort : 정렬(원본배열을 정렬함)
const fruits2 = ["banana", "orange", "apple", "mango"];
console.log(fruits2);

const sortedFruits = fruits2.sort();
// fruits2.sort();
console.log(fruits2);
console.log(sortedFruits);


const numbers2 = [40,100,1,5,25];
// numbers.sort(); // sort는 안에 옵션을 안넣으면 기본적으로 문자열로 비교를 함

numbers2.sort((a,b)=>{
    return a-b; // 오름차순 정렬
    // return b-a; // 내림차순 정렬
})

console.log(numbers2);