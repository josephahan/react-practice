import React from "react";

function ToDoItem(props) {
  return (
    <li
      // a function is called for onChecked rather than directly calling onChecked
      // this is so that onChecked is not immediately called after the page is rendered but on called after the click
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
