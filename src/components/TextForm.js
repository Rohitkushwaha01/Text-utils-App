import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text Here");

  const handleUpperClick = function (e) {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerClick = function (e) {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = function (e) {
    setText("");
  };

  const handleJoinClick = function (e) {
    let join = text.split(' ').join('-');
    setText(join)
  };

  const handleRemoveClick = function(e){
    let remove = text.split('-').join(' ');
    setText(remove)
  }

  const handleSpaceClick = function(e){
    let removeSpace = text.split(' ').filter(item => item !== '').join(' ');
    setText(removeSpace)
  }

  const handleEmailClick = function(e){
    let email = text.split(' ').filter(item => item.endsWith('@gmail.com')).join(' ');
    if(email === "") setText("No email found")
    else  setText(email)
  }

  const handleOnChange = function (e) {
    setText(e.target.value)
  };

  return (
    <>
    <div className="mb-3 container mt-5">
      <label htmlFor="mybox" className="form-label h3">{props.heading}</label>
      <textarea className="form-control" id="mybox" rows="10" value={text} onChange={handleOnChange}></textarea>
      <div className="my-2 d-flex flex-wrap">
        <button className="btn btn-primary m-2 flex-grow-1" onClick={handleUpperClick}>
            Convert to Uppercase
        </button>
        <button className="btn btn-primary m-2 flex-grow-1" onClick={handleLowerClick}>
            Convert to LowerCase
        </button>
        <button className="btn btn-primary m-2 flex-grow-1" onClick={handleClearClick}>
            Clear Textarea
        </button>
        <button className="btn btn-primary m-2 flex-grow-1" onClick={handleJoinClick}>
            Join all Text
        </button>
        <button className="btn btn-primary m-2 flex-grow-1" onClick={handleRemoveClick}>
            Remove "-"
        </button>
        <button className="btn btn-primary m-2 flex-grow-1" onClick={handleSpaceClick}>
            Remove doubleSpace
        </button>
        <button className="btn btn-primary m-2 flex-grow-1" onClick={handleEmailClick}>
            Extract Email
        </button>
      </div>
    </div>
    <div className="container my-2">
        <h3>Your text Summary</h3>
        <p>{text.split(" ").length} words, {text.length} character, {0.008 * text.split(" ").length} Minutes need to read</p>
        <h3>Preview</h3>
        <p className="p-3 border border-info rounded fw-bold">{text.length>0?text:"Enter Something to Preview"}</p>
    </div>
    </>
  )
}
