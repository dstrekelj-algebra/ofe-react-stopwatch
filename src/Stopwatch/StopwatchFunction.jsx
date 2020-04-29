import React from "react";
import { formatTime } from "../helpers";

export function Stopwatch(props) {
  return (
    <div>
      <div>{formatTime(props.timer)}</div>
      <div>
        <button onClick={props.onStart}>START</button>
        <button onClick={props.onStop}>STOP</button>
        <button onClick={props.onLap}>LAP</button>
        <button onClick={props.onReset}>RESET</button>
        <button onClick={props.onClear}>CLEAR</button>
      </div>
      <div>
        {props.times.map((time, index) => (
          <div key={index}>{formatTime(time)}</div>
        ))}
      </div>
    </div>
  );
}
