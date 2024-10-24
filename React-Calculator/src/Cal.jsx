import React, { useState } from "react";
import "./cal.css";

const Cal = () => {
  const [input, setinput] = useState("");
  const [result, setresult] = useState("");

  const handleclick = (eve) => {
    setinput(input + eve);
  };

  const clear = () => {
    setinput("");
    setresult("");
  };

  const equal = () => {
    try {
      setresult(eval(input));
    } catch (error) {
      setresult("error");
    }
    console.log(equal);
  };

  return (
    <div className="main">
      <h1 style={{ textAlign: "center" }}>CALCULATOR</h1>
      <div id="int">
        <input type="text" value={input} readOnly></input>
      </div>
      <div className="result" style={{ fontSize: "40px", color: "white+" }}>
        {result}
      </div>
      <div className="button">
        <button onClick={clear}>C</button>
        <button onClick={() => handleclick("1")}>1</button>
        <button onClick={() => handleclick("2")}>2</button>
        <button onClick={() => handleclick("3")}>3</button>
        <button onClick={() => handleclick("+")}>+</button>
        <button onClick={() => handleclick("4")}>4</button>
        <button onClick={() => handleclick("5")}>5</button>
        <button onClick={() => handleclick("6")}>6</button>
        <button onClick={() => handleclick("-")}>-</button>
        <button onClick={() => handleclick("7")}>7</button>
        <button onClick={() => handleclick("8")}>8</button>
        <button onClick={() => handleclick("9")}>9</button>
        <button onClick={() => handleclick("/")}>/</button>
        <button onClick={() => handleclick("*")}>*</button>
        <button onClick={() => handleclick("0")}>0</button>
        <button onClick={equal}>=</button>
      </div>
    </div>
  );
};

export default Cal;
