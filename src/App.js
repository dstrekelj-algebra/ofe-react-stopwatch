import React, { useState, useRef } from "react";
import { Stopwatch } from "./Stopwatch";

function App() {
  const [timer, setTimer] = useState(0);
  const [times, setTimes] = useState([]);
  const timerInterval = useRef();

  const onStart = () => {
    if (timerInterval.current) return;

    timerInterval.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 10);
  };

  const onStop = () => {
    if (timerInterval.current) {
      clearInterval(timerInterval.current);
      timerInterval.current = null;
    }
  };

  const onReset = () => {
    setTimer(0);
  };

  const onLap = () => {
    setTimes([timer, ...times]);
    setTimer(0);
  };

  const onClear = () => {
    setTimes([]);
  };

  return (
    <Stopwatch
      onStart={onStart}
      onStop={onStop}
      onLap={onLap}
      onReset={onReset}
      onClear={onClear}
      timer={timer}
      times={times}
    />
  );
}

export default App;
