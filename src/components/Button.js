import { useState } from "react";
import React from 'react'

export default function (props) {
   const [text, setText] = useState('Enter text here...');
   
   const handleClick = () =>{
     let updatedText = text.toUpperCase();
     setText(updatedText);
   }

  return (
    <div><button className="btn btn-primary" onClick={handleClick}>{props.text}</button></div>
  )
}
