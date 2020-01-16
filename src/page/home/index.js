import React, { useState, useEffect } from "react";
import { Link } from 'react-router'
import "./index.less";

const Home = () => {
  const [data, setDate] = useState("home");

  return (
    <div className="home">
      <h1>name</h1>
      <Link to="/prototype">pro</Link>
    </div>
  );
};

export default Home;
