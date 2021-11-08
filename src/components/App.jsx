import React, { useState } from "react";

function App() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  function updatefName(event) {
    const firstName = event.target.value;
    setfName(firstName);
  }
  function updatelName(event) {
    const lastName = event.target.value;
    setfName(lastName);
  }
  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange=""
          placeholder="First Name"
          value={fName}
        />
        <input name="lName" onChange="" placeholder="Last Name" value={lName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
