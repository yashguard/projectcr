import React, { useState } from "react";
import Button from "./Button";
function App() {
  let [state, setState] = useState(0);
  let [check, setCheck] = useState(true);
  const changeColor = () => {
    setState(++state);
    if(state%2 == 0) {
      setCheck(true);
    }
    else {
      setCheck(false);
    }
  };
  return (
    <>
      <h1 style={{backgroundColor:check ? "black" : "white",color:check ? "white" : "black", border:check ? "1px solid white" : "1px solid black", transition:"all 0.3s" , textAlign:"center"}}>{state}</h1>
      <Button changeColor={changeColor} checkValue={check} />
    </>
  );
}

export default App;
