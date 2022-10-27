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

  const handleOnChange = function (e) {
    setText(e.target.value)
  };

  const handleOnFocus = function (e) {
    setText("") // On focus textarea should be empty
  };

  return (
    <>
    <div className="mb-3 container mt-5">
      <label htmlFor="mybox" className="form-label h3">{props.heading}</label>
      <textarea className="form-control" id="mybox" rows="10" value={text} onChange={handleOnChange}
      onClick={handleOnFocus}></textarea>
      <div className="my-2">
        <button className="btn btn-primary m-2" onClick={handleUpperClick}>
            Convert to Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleLowerClick}>
            Convert to LowerCase
        </button>
        <button className="btn btn-primary m-2" onClick={handleClearClick}>
            Clear Textarea
        </button>
        <button className="btn btn-primary m-2" onClick={handleJoinClick}>
            Join all Text
        </button>
        <button className="btn btn-primary m-2" onClick={handleRemoveClick}>
            Remove "-"
        </button>
      </div>
    </div>
    <div className="container my-2">
        <h3>Your text Summary</h3>
        <p>{text.split(" ").length} words, {text.length} character, {0.008 * text.split(" ").length} Minutes need to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something to Preview"}</p>
    </div>
    </>
  )
}
