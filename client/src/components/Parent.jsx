import React, { useState } from "react";
import Child from "./Child";
import axios from "axios";

const Parent = () => {
  const [data, setData] = useState("");
  const [apiData, setApiData] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get("/api/data");
      console.log(response.data[0].name);
      setApiData(response.data[0].name);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleData = (childData) => {
    setData(childData);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child: {data}</p>
      <Child onData={handleData} />
      <p>
        Data from the backend:{" "}
        {apiData ? JSON.stringify(apiData) : "No data yet"}
      </p>
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default Parent;
