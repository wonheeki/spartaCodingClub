// import React from "react";

// function Child(props) {
//   return <div>{props.grandFatherName}</div>;
// }

// function Mother(props) {
//   return <Child grandFatherName={props.grandFatherName} />;
// }

// function GrandFather() {
//   const name = "르탄이";
//   return <Mother grandFatherName={name} />;
// }

// function App() {
//   return <GrandFather />;
// }

// export default App;

import React, { useState } from 'react'

const App = () => {
  // const [name, setName]= useState("르순이");
  // const [text, setText]= useState("");

  // const handleNameChange =()=>{
  //   setName("최르순이");
  // }

  // const handleInputChange=(event)=>{
  //   console.log(event)
  //   setText(event.target.value);
  // }
  const [number, setNumber]= useState(0);
  const plusBtn =()=>{
    setNumber(number+1);
  }
  const minusBtn=()=>{
    setNumber(number-1);
  }
  return (
    // <div>
    //   <h1>React State</h1>
    //   <button onClick={handleNameChange}>최르순이로!</button>
    //   {name}
    //   <br/>

    //   <input onChange={handleInputChange}/>
    //   <br/>
    //   {text}
    // </div>
   <>
   <div>{number}</div>
   <br/>
    <button onClick={plusBtn}>+1</button>
    <button onClick={minusBtn}>-1</button>
   </> 
  )
}

export default App
