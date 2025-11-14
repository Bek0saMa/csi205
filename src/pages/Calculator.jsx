import { useState, useEffect } from "react";
import "./css/Calculator.css";

export default function Calculator() {
  const [screen, setScreen] = useState("0");
  const [state, setState] = useState("S0");
  const [operator, setOperator] = useState("?");
  const [firstOperand, setFirstOperand] = useState(null);
  const [lastOperator, setLastOperator] = useState(null);
  const [lastOperand, setLastOperand] = useState(null);
  const [memory, setMemory] = useState(0);

  const formatNumber = (num) => {
    let str = num.toString();
    if (str.length <= 9) return str;
    return Number(num).toPrecision(9).replace(/\.?0+$/, "");
  };

  const updateScreen = () => {
  };

  const ceClicked = () => {
    setScreen("0");
    setState("S0");
    setOperator("?");
    setFirstOperand(null);
  };

  const equalClicked = () => {
    let secondOperand = Number(screen);
    if (state === "S1" && firstOperand !== null && operator !== "?") {
      let result;
      switch (operator) {
        case "+":
          result = firstOperand + secondOperand;
          break;
        case "-":
          result = firstOperand - secondOperand;
          break;
        case "*":
          result = firstOperand * secondOperand;
          break;
        case "/":
          if (secondOperand === 0) {
            setScreen("Error");
            return;
          }
          result = firstOperand / secondOperand;
          break;
      }
      setScreen(formatNumber(result));
      setLastOperator(operator);
      setLastOperand(secondOperand);
    } else if (lastOperator) {
      let current = Number(screen);
      let result;
      switch (lastOperator) {
        case "+":
          result = current + lastOperand;
          break;
        case "-":
          result = current - lastOperand;
          break;
        case "*":
          result = current * lastOperand;
          break;
        case "/":
          if (lastOperand === 0) {
            setScreen("Error");
            return;
          }
          result = current / lastOperand;
          break;
      }
      setScreen(formatNumber(result));
    }
    setState("S0");
    setFirstOperand(Number(screen));
    setOperator("?");
  };

  const operatorClicked = (_operator) => {
    if (state === "S1") {
      setFirstOperand(Number(screen));
      setOperator(_operator);
      setState("S2");
    } else if (state === "S2") {
      setOperator(_operator);
    }
  };

  const numberClicked = (number) => {
    if (state === "S0") {
      setScreen(number.toString());
      setState("S1");
    } else if (state === "S1") {
      if (screen.length < 9) setScreen(screen + number.toString());
    } else if (state === "S2") {
      setScreen(number.toString());
      setState("S1");
    }
  };

  const dotClicked = () => {
    if (!screen.includes(".")) setScreen(screen + ".");
  };

  const plusMinusClicked = () => {
    if (screen !== "0") setScreen((-Number(screen)).toString());
  };

  const sqrtClicked = () => {
    const value = Number(screen);
    if (value >= 0) setScreen(Math.sqrt(value).toString());
    else setScreen("Error");
  };

  const percentClicked = () => setScreen((Number(screen) / 100).toString());

  const reciprocalClicked = () => {
    const value = Number(screen);
    if (value !== 0) setScreen((1 / value).toString());
    else setScreen("Error");
  };

  const mcClicked = () => setMemory(0);
  const mrClicked = () => setScreen(memory.toString());
  const mPlusClicked = () => setMemory(memory + Number(screen));
  const mMinusClicked = () => setMemory(memory - Number(screen));

  const checkKeyboard = (event) => {
    const key = event.key;
    if (key >= "0" && key <= "9") numberClicked(Number(key));
    else if (key === "+") operatorClicked("+");
    else if (key === "-") operatorClicked("-");
    else if (key === "*") operatorClicked("*");
    else if (key === "/") operatorClicked("/");
    else if (key === "Enter" || key === "Return") {
      event.preventDefault();
      equalClicked();
    } else if (key === "Escape") ceClicked();
    else if (key === ".") dotClicked();
    else if (key === "Backspace") {
      event.preventDefault();
      if (state === "S1") {
        if (screen.length > 1) setScreen(screen.slice(0, -1));
        else {
          setScreen("0");
          setState("S0");
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", checkKeyboard);
    return () => document.removeEventListener("keydown", checkKeyboard);
  }, [screen, state]);

  return (
    <div className="cal-container">
      <div className="cal-screen" id="screen">
        {screen}
      </div>

      <div>
        <button className="cal-btn cal-btn-green" onClick={mcClicked}>MC</button>
        <button className="cal-btn cal-btn-green" onClick={mrClicked}>MR</button>
        <button className="cal-btn cal-btn-green" onClick={mPlusClicked}>M+</button>
        <button className="cal-btn cal-btn-green" onClick={mMinusClicked}>M−</button>
        <button className="cal-btn cal-btn-red" onClick={ceClicked}>CE</button>
      </div>

      <div>
        {[7, 8, 9].map((n) => (
          <button key={n} className="cal-btn cal-btn-blue" onClick={() => numberClicked(n)}>{n}</button>
        ))}
        <button className="cal-btn cal-btn-green" onClick={() => operatorClicked("/")}>÷</button>
        <button className="cal-btn cal-btn-green" onClick={sqrtClicked}>√</button>
      </div>

      <div>
        {[4, 5, 6].map((n) => (
          <button key={n} className="cal-btn cal-btn-blue" onClick={() => numberClicked(n)}>{n}</button>
        ))}
        <button className="cal-btn cal-btn-green" onClick={() => operatorClicked("*")}>×</button>
        <button className="cal-btn cal-btn-green" onClick={percentClicked}>%</button>
      </div>

      <div>
        {[1, 2, 3].map((n) => (
          <button key={n} className="cal-btn cal-btn-blue" onClick={() => numberClicked(n)}>{n}</button>
        ))}
        <button className="cal-btn cal-btn-green" onClick={() => operatorClicked("-")}>−</button>
        <button className="cal-btn cal-btn-green" onClick={reciprocalClicked}>1/×</button>
      </div>

      <div>
        <button className="cal-btn cal-btn-blue" onClick={() => numberClicked(0)}>0</button>
        <button className="cal-btn cal-btn-blue" onClick={dotClicked}>.</button>
        <button className="cal-btn cal-btn-blue" onClick={plusMinusClicked}>+/<sub>−</sub></button>
        <button className="cal-btn cal-btn-green" onClick={() => operatorClicked("+")}>+</button>
        <button className="cal-btn cal-btn-green" onClick={equalClicked}>=</button>
      </div>
    </div>
  );
}
