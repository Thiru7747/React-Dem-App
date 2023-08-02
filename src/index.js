import React from "react";
import  ReactDOM  from "react-dom";

function Greeting(){
  return (
    <>
    <div>
      <Name />
      <Designation />
      </div>
    </>
  );
}

function Name(){
  return <h1>Thirupathi</h1>
}

const Designation = () =>{
  return <p>Software Engineer</p>
}

ReactDOM.render(<Greeting />,document.getElementById('root'));