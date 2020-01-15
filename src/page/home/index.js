import React, { useState, useEffect } from "react";
import "./index.css";
import md from "../../sources/1.md";

const Home = () => {
  const [data, setDate] = useState("home");

  return (
    <div>
      {data}
      <br />
      <div dangerouslySetInnerHTML={{__html: md}}></div>
    </div>
  );
};

export default Home;
