import React, { useState } from "react";

const Child = ({ onData }) => {
  const [inputValue, setInputValue] = useState("");

  // Function to handle the input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to send data to the parent
  const sendData = () => {
    if (typeof onData === "function") {
      onData(inputValue);
    } else {
      console.error("onData is not a function");
    }
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
};

export default Child;
