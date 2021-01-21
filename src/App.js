import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    console.log(wordsArr);
    return wordsArr.filter((word) => word !== "").length;
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false);
      console.log(isTimeRunning);
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div className="App">
      <h1>Speed typing game</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time reamining: {timeRemaining}</h4>
      <button onClick={() => setIsTimeRunning(true)}>Start</button>
      <h1>Word count: {calculateWordCount(text)}</h1>
    </div>
  );
}

export default App;
