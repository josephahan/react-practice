import React from "react";

function App() {

  const [count, setCount] = React.useState(0); // using a technique called destructuring to name the values in the array created by the use state function, count is the name for the first value in the array, setCount is the value for the second item.
  
  function increase(){
    setCount(count+1);
  }

  function decrease(){
    setCount(count-1);
  }

  return <div className="container">
    <h1>{count}</h1>
    <button onClick={decrease}>-</button>
    <button onClick={increase}>+</button>
  </div>;
}

export default App;
