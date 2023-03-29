import React from 'react'

function Button(props) {
  return (
    <>
      <button style={{margin:"auto", display:"block", cursor:"pointer", padding:"10px 24px", fontSize:"18px", fontWeight:"600", backgroundColor:props.checkValue ? "black" : "white",color:props.checkValue ? "white" : "black", border:props.checkValue ? "1px solid white" : "1px solid black", transition:"all 0.3s"}} onClick={()=>props.changeColor()}>Click for change color</button>
    </>
  )
}

export default Button
