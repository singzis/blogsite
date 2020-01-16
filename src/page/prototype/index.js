import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
// import "./index.less";
import md from "../../sources/1.md";

const Prototype = () => {
  const [data, setDate] = useState("");

  return (
    <div className="div">
      <ReactMarkdown source={md} />
    </div>
  );
};

export default Prototype;
