import React from "react";

function App() {

  let time = new Date().toLocaleTimeString();
  var [ctime, onCtime] = new React.useState(time);

  function getTime(){
    let newtime = new Date().toLocaleTimeString();
    onCtime(newtime); //this is the function that sets the value of the state
  }

  return (
    <div className="container">
      <h1>{ctime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
