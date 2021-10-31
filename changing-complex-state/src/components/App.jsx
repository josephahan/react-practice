import React from "react";

//two different functions created, the one above is a more simpler implementation of the code below.
//the one above uses certain techniques to make code simpler
//techniques have been commented

function App() {
  //we can store objects in useState as oppose to a value in order to make code more simpler
  const [fullName, setFullName] = React.useState({
    //fullname is storing two objects below
    fName: "",
    lName: ""
  });

  //the event can be accessed as an object in the function, this allows access to all the attribut values such as the value, name, placeholder etc.
  function updateValues(event) {
    //the code below can be destructured to the following:
    // const {value, name} = event.target;
    //this means that newValue and inputName can be replaced with value and name making code cleaner
    const newValue = event.target.value;
    const inputName = event.target.name;

    //by putting the if statement as a function within the setFullName function (the function that changes the state)
    //I can pass in a value to this function that is called within setFullname
    //this value passed in will be an object form of the previous value called by this function.
    //If the if statement was declared outside the function, I would not be able to access the previous state value.
    setFullName((prevValue) => {
      //console.log(prevValue);
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={updateValues}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={updateValues}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

//Below is a more complex implementation of the code above.

// function App() {
//   const [fName, setFName] = React.useState("");
//   const [lName, setLName] = React.useState("");

//   function updateFname(event) {
//     //console.log(event.target.value);
//     //console.log(event.target.placeholder);
//     const firstName = event.target.value;
//     setFName(firstName);
//   }

//   function updateLname(event) {
//     const lastName = event.target.value;
//     setLName(lastName);
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {fName} {lName}{" "}
//       </h1>
//       <form>
//         <input
//           onChange={updateFname}
//           //when input triggers function associated to onChange an event object is created which we can access in the function we have triggered. We can access various things related to the event, in our case the value
//           name="fName"
//           placeholder="First Name"
//           value={fName} //must make sure value attribute is updated with the state so that the input as it is a rule for the input tag to be made aware.
//         />
//         <input
//           onChange={updateLname}
//           name="lName"
//           placeholder="Last Name"
//           value={lName}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

export default App;
