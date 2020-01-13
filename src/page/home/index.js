import React, { useState, useEffect } from "react";
import "./index.css";

const Home = () => {
  const [data, setDate] = useState("home");

  return <div>{data}</div>;
};

export default Home;
