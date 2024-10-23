import React from 'react'

const App = () => {
  const NUMBER =1000;
  const arr =[1,2,3,4,5];

  const pTagStyle={
    color:"orange",
    fontSize:"20px", 
  };

  return (
    <>
      <div
        id="abc"
        className="abc"
      >첫 번째 줄</div>
      <div>두 번째 줄</div>
      <div>{NUMBER}</div>

      <p style={{color:"orange"}}>하이</p>

      <p style={pTagStyle}>하이하이</p>
    </>
  )
}

export default App
  