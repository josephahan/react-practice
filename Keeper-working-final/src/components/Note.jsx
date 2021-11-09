import React from "react";

function Note(props) {
  function handleClick() {
    //the id is accessed through props and is sent back with the onDelete function whcih triggers the deleteNote function in the app component
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
