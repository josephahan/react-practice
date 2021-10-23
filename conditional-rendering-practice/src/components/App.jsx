import React from "react";
import Login from "./Login";
import Register from "./Register";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Login /> : <Register /> }
    </div>
  );
}

//Rather than having Login and Register seperately, There could be just one Form component
//The userIsRegistered varible can be passed through using props and the conditionals could all be dealt with in the Form

export default App;
