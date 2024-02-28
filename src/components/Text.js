import React,{ useState } from "react";

function Text(props){
   const [text, setText] = useState('Enter text here...');

   const handleClick = () =>{
     let updatedText = text.toUpperCase();
     setText(updatedText);
   }
   const handleOnChange = (event) =>{
     setText(event.target.value)
     
   }
    return (
      <>
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="myBox"
              value={text}
              onChange={handleOnChange}
              rows="3"
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary" onClick={handleClick}>
            Convert to Lowercase
          </button>
        </div>
        <div className="conatiner my-3">
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
        </div>
      </>
    );
}

export default Text;