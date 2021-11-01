import React from "react";

function App() {
  //create a state for when a text is inputted
  const [listItem, setListItem] = React.useState();
  //create a state to track all items in list as an array
  const [allItems, setAllItems] = React.useState([]);

  //function to save the value of the input text as a state
  function handleChange(event) {
    const newValue = event.target.value;
    setListItem(newValue);
  }

  //function to add new item to list and keeping all the previous items
  function handleClick() {
    setAllItems((prevValue) => {
      return [...prevValue, listItem];
    });
    //this function would clear the input text area once the add buttin is clicked
    setListItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          //this is where the state is created for the new input text
          onChange={handleChange}
          type="text"
          name="listItem"
          value={listItem}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {allItems.map((cItem) => {
            return <li> {cItem} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}
// used map operator in above <ul> to display each item of all items
export default App;
