import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateValues(event) {
    const { value, name } = event.target;
    //console.log(value);

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fNAme: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      }
      return {
        fNAme: prevValue.fName,
        lName: prevValue.lName,
        email: value
      };
    });
  }

  //**** */shorter method to doing above code using spread operator
  // [name]:value part uses something called a key variable. by using [name] we are abel to
  //get the value of the name declared outside the function. in the code above we used the string as the key such as "fName"
  //by using the spread operator we are able to in one line get an object that returns all the items in the previous JS object

  // function updateValues(event) {
  //   const { value, name } = event.target;
  //   setContact((prevValue) => {
  //     return {
  //       ...prevValue,
  //       [name]: value
  //     };
  //   });
  // }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={updateValues}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={updateValues}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={updateValues}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
