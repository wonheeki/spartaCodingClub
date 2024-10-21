// Template Literals
// 템플릿 리터럴은 변수와 표현식을 문자열 안에 쉽게 삽입할 수 있게 해주는 문법입니다.

const customer ={
     name: "르탄이",    
};
const item ={
    name:"커피",
    price: 4000,
};
console.log("감사합니다. "+customer.name+"님"+item.name+"을(를) "+ item.price+ "원에 구매하셨습니다.");

console.log(`감사합니다. ${customer.name}님!`);

const orderDetails ="고객: "+customer.name+"\n"+
"상품 : "+item.name +"\n"+
"가격 : "+ item.price;

console.log("orderDetail"+orderDetails);

const orderDetails2=`고객 : ${customer.name}님\
상품 : ${item.name}
가격 : ${item.price}`;

console.log("orderDetail2"+orderDetails2)


//----------------------------------------------------------



// Destructuring
// De : not
// structuring : 구조


// 01_객체의 구조분해
// 객체는 {} 중괄호를 써서 구조분해

const item2 ={
    name:"커피",
    price: 4000,
};

// const name = item2.name;
// const price = item2.price;
const {name, price} = item;

console.log("name => ",name);
console.log("price =>",price)


// 객체의 destructuring은 key가 중요하다. name과 age의 순서가 바뀌어도 무관하다. 이름 따라감
function great({name,age}){
    console.log(`안녕하세요 제 이름은 ${name}입니다. 나이는 ${age}예요.`)
}

const person ={
    name: "르탄이",
    age: 30,
};

great(person);


// 02_배열의 구조분해
// 배열은 [] 대괄호를 써서 구조분해
const colors =["red","green","blue"];
const [firstColor, secondColor] = colors;

const [, , thirdColor]=colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);


// destructuring prac 01.
const pers = {
    persName:"르탄이", 
    persAge:25,
    persJob: "개발자",   
};

const {persName,persAge} = pers;

console.log(persName);
console.log(persAge);

// destructuring prac 02.
const movie ={
    title:"Inception",
    director :"Christopher Nolan",
    release:{
        year:2010,
        month:"July"
    }
};
// const {title, release} = movie;

// console.log(title)
// console.log(release.year);

const {title , release:{year}} = movie; 
// release를 구조분해 할당을 한 후에 release안에 있는 year를 한 번 더 구조분해 할당
console.log(title);
console.log(year);

 // destructuring prac 03.

 // * remind *
 //  객체 : key
 // 배열 : 위치(index)

 const numbers =[10,20,30,40,50];
 const[first, , third]= numbers;
 console.log(first);
 console.log(third);
 


 // destructuring prac 04.
function confirmReservation(user){
    const {name, roomType,date:firstDate}=user

    return `${name} 고객님의 ${roomType}룸 입실 날짜는 ${firstDate} 입니다.`
}

const userInfo= {
    name : "James",
    roomType:"Deluxe",
    date : "2023-05-30"
}

const result = confirmReservation(userInfo);
console.log(result);


//----------------------------------------------------------

// Spread Operators

const originalUser ={
    name:"르탄이",
    age: 28, 
};

// 어디에 복사!
// const updatedUser = originalUser;
// updatedUser.name="르순이";

// console.log("원본 => ",originalUser);
// console.log("복사본 => ",updatedUser);
// 원본 =>  { name: '르순이', age: 28 }
// 복사본 =>  { name: '르순이', age: 28 }
// 참조하는 위치를 복사했기 때문에 (주소값) 원본 객체까지 수정이됨

// const updatedUser = {    name:"르탄이",age: 28, } 와 같은 코드
// 주소 복사가 아닌 새로운 객체 생성
const updatedUser = {...originalUser};
updatedUser.name ="르순이";
console.log("원본 => ",originalUser);
console.log("복사본 => ",updatedUser);

// 배열이나 객체를 합칠 때도 유용하게 쓰임


const firstNum =[1,2,3];
const secondNum = [4,5,6];

// [1,2,3,4,5,6]
const combinedArray =[...firstNum,...secondNum];

console.log(combinedArray);


// spread operator prac01.
const array1 =[1,2,3];
const array2 = [4,5,6];

const combinedArr= [...array1,...array2]

const changedArr = [...array1,40,50];

console.log(`array1 => ${array1}, array2 => ${array2}`)
console.log(combinedArr);
console.log(changedArr);


// spread operator prac02.

const obj1 = {name:"르탄이", age:25};
const obj2 ={name:"르순이", email :"rsoony@sparta.com"};

// 두 객체를 병합을 했을 때 키가 중복된다면 뒤에 있는 값을 우선으로 한다는 것을 유추해볼 수 있음
const mergedObj={...obj1, ...obj2};

mergedObj.name="원장님";
console.log(obj1);
console.log(obj2);

console.log(mergedObj);



// rest operator는 spread operator와 비슷하다!
// 사용법 : ...변수명

// spread opreator : 객체 또는 배열을 복사하거나 합칠 때 사용
// rest opreator : (1) 함수의 매개변수
// function sum(numbers){
//     return numbers.reduce((acc, cur)=>{
//         return acc+cur
//     })
// }

// const results = sum([1,2,3,4,5]);

function sum(...numbers){
    console.log("HERE! => ",numbers);
    return numbers.reduce((acc, cur)=>
    // 아래의 코드를 중괄호로 감쌌더니 undefined가 출력됨
    // ㄴ> 보통 중괄호로 묶어주면 여러줄의 코드를 반환하는거라서 return이라는 명령어가 필요한데 중괄호로 묶어주지 않으면 반환하는 코드가 한 줄 뿐이니까 굳이 return을 써주지 않아도 자동으로 return이 된다고 이해
     acc+cur
    )
}

// 

const results = sum(1,2,3,4,5);
console.log(results)


// (2) 객체 분해 할당 시, 여러 값을 그룹핑

const human = {
    name:"John",
    age:30,
    country:"USA",
    occupation : "Developer",
};

// const {occupation, name, age,country} = human;
// occupation 빼고 나머지라는 의미
// 아래의 rest는 다른 단어로 바꿔도 무방
const {occupation,...rest}=human;
console.log("rest=> ",rest);


// rest operator prac01.

const personPrac = {name:"Young", age :35, job:"developer",pw:"1234"}

const {password, ...sampleObj} = personPrac;
console.log(sampleObj)