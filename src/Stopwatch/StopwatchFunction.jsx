import React from "react";

export function Stopwatch(props) {
  return (
    <div>
      <div>{props.timer}</div>
      <div>
        <button onClick={props.onStart}>START</button>
        <button onClick={props.onStop}>STOP</button>
        <button onClick={props.onLap}>LAP</button>
        <button onClick={props.onReset}>RESET</button>
      </div>
      <div>
        {props.times.map((time, index) => (
          <div key={index}>{time}</div>
        ))}
      </div>
    </div>
  );
}
