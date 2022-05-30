import React, { useState } from "react";

function App() {
  const [fullName, setName] = useState({
    fName: "",
    lName: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleName(event) {
    const { name, value } = event.target;
    value.split("").join("");
    setName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
    // Comment above code and uncomment below and see what happens basically below we are passing i.e. changing the state of whole fullName object to new state
    // if (name === "fName") {
    //   setName({
    //     fName: value,
    //     lName: ""
    //   });
    // } else if (name === "lName") {
    //   setName({
    //     fName: "",
    //     lName: value
    //   });
    // }
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleName}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleName}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
