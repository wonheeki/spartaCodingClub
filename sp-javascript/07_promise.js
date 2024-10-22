// Promise

const myPromise = new Promise(function(resolve,reject){
    if(true){
        resolve('Success');
    }else{
        reject('Failed');
    }
})

myPromise.then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
})


// async - await

// const fetchData=async ()=>{
//     return 'Data loaded';
// }

// 아래 코드와 같아요
// async function fetchData(){
//  return Promise.resolve('Data loaded');
//}

async function fetchData() {
    try {
      const data = await fetch('https://api.example.com/data');
      const json = await data.json();
      console.log(json);
    } catch (error) {
      console.error("Data loading failed", error);
    }
  }
  
  fetchData();
  