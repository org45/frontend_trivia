import React, { useState } from "react";
import Authen from "./Authen";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import io from "socket.io-client";
const ENDPOINT = "http://localhost:5000";
let socket = io(ENDPOINT);

export default function AppOptions() {
  const [input1, setInput1] = useState(1);
  const [input2, setInput2] = useState(2);
  const [input3, setInput3] = useState(3);
  const [input4, setInput4] = useState(4);
  const [lastInput, setLastInput] = useState(0);

  var aValue = {
    personalInfo: JSON.parse(localStorage.getItem("personalInfo")),
    answer: 0,
  };

  const handleInputSubmission = () => {
    aValue["answer"] = lastInput;
    socket.emit("answer", JSON.stringify(aValue));
  };

  const handle1 = (e) => {
    e.preventDefault();
    setInput1(1);
    console.log(e.target.value);
    setLastInput(e.target.value);
    aValue["answer"] = input1;
    socket.emit("answer", JSON.stringify(aValue));
  };

  const handle2 = (e) => {
    e.preventDefault();
    setInput1(2);
    console.log(e.target.value);
    setLastInput(e.target.value);
    aValue["answer"] = input2;
    socket.emit("answer", JSON.stringify(aValue));
  };

  const handle3 = (e) => {
    e.preventDefault();
    setInput1(3);
    console.log(e.target.value);
    setLastInput(e.target.value);
    aValue["answer"] = input3;
    socket.emit("answer", JSON.stringify(aValue));
  };
  const handle4 = (e) => {
    e.preventDefault();
    setInput1(4);
    console.log(e.target.value);
    setLastInput(e.target.value);
    aValue["answer"] = input4;
    socket.emit("answer", JSON.stringify(aValue));
  };

  return (
    <div>
      <Authen className="authenButton" />

      <hr />
      <button onClick={handle1} value={input1}>
        1
      </button>
      <br />
      <button onClick={handle2} value={input2}>
        2
      </button>
      <br />
      <button onClick={handle3} value={input3}>
        3
      </button>
      <br />
      <button onClick={handle4} value={input4}>
        4
      </button>
      <br />
      <hr />
      <button onClick={handleInputSubmission}>Go</button>
    </div>
  );
}
