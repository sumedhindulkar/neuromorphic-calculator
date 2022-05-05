import "./App.css";
import { useState } from "react";
function App() {
  const data = [
    { type: "clear", symbol: "C" },
    { type: "dummy", symbol: "+/-" },
    { type: "operator", symbol: "%" },
    { type: "operator", symbol: "÷" },
    { type: "number", symbol: "7" },
    { type: "number", symbol: "8" },
    { type: "number", symbol: "9" },
    { type: "operator", symbol: "X" },
    { type: "number", symbol: "4" },
    { type: "number", symbol: "5" },
    { type: "number", symbol: "6" },
    { type: "operator", symbol: "-" },
    { type: "number", symbol: "1" },
    { type: "number", symbol: "2" },
    { type: "number", symbol: "3" },
    { type: "operator", symbol: "+" },
  ];
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);
  const [ans, setAns] = useState(0);
  const calculator = ({ itemType, value }) => {
    console.log(itemType);
    console.log(value);
    if (itemType === "number" && !op) {
      if (!ans) value = parseFloat(value);
      setNum1((old) => parseFloat(old + value));
      setAns((old) => old + value);
    }
    if (itemType === "number" && op) {
      let num = parseFloat((ans+value).match(/\d+/g))
      setNum2(num);
      setAns((old) => old + value);

    }
    if (itemType === "clear") {
      setAns(0);
      setNum1(null);
      setNum2(null);
      return;
    }

    if(itemType ==="equal"){
      console.log("num1: "+num1+" num2: "+num2)
      if(op ==="+"){
        setNum1(num1+num2)
        setAns(num1+num2);
      }
      if(op ==="-"){
        setNum1(num1-num2)
        setAns(num1-num2);
      }
       if(op ==="X"){
        setNum1(num1*num2)
        setAns(num1*num2);
      }
       if(op ==="÷"){
        setNum1(num1/num2)
        setAns(num1/num2);
      }
       if(op ==="%"){
        setNum1((num1*num2)/100);
        setAns((num1*num2)/100);
      }
      setNum2(null);
      setOp(null);
    }
    if (itemType === "operator") {
      setAns(value);
      setOp(value)
    }
  };
  return (
    <div className="app">
      <div className="design">
        <div className="box1 neuro"></div>
        <div className="box2 neuro"></div>
        <div className="circle1 neuro"></div>
        <div className="circle2 neuro"></div>
      </div>
      <div>
        <div className="main neuro">
          <div className="top">
            <span>{ans}</span>
          </div>
          <div className="bottom">
            {data &&
              data.map((item) => {
                return (
                  <button
                    key={item.symbol}
                    className="keys"
                    onClick={() => {
                      calculator({ itemType: item.type, value: item.symbol });
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {item.symbol}
                  </button>
                );
              })}
            <button className="keys w-40 " onClick={() => {
                      calculator({ itemType: "number", value: "0" });
                    }}>0</button>
            <button className="keys ">.</button>
            <button className="keys clear"
            onClick={() => {
                      calculator({ itemType: "equal", value: "=" });
                    }}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
