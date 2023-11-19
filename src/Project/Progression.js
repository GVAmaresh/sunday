import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Progression() {
  const [progress, setProgress] = useState({ click: true, value: 0 });
  const [timer, setTimer] = useState({ click: true, value: 0 });
  function handleClick(setChange) {
    setChange((prevChange) => {
      return { ...prevChange, click: !prevChange.click };
    });
  }
  
  function onKey(e, setChange) {
    if(e.key === "Enter"){
      setChange({click: true,value:e.target.value})
    }
  }
  return (
    <div className="progression">
      <div
        className="progress"
        onDoubleClick={() => handleClick(setProgress)}
      >
        <CircularProgressbar value={progress.value} />
        <div className="progressValue">
          {progress.click ? (
            <div>{progress.value}</div>
          ) : (
            <div>
              <input
                className="progressInput"
                type="text"
                name=""
                id=""
                onKeyPress={(e)=>onKey(e, setProgress)}
                ref={(inputRef) => {
                  if (inputRef && !progress.click) inputRef.focus();
                }}
                onBlur={() => handleClick(setProgress)}
              />
            </div>
          )}
        </div>
      </div>
      <div
        className="timer"
        onDoubleClick={() => handleClick(setTimer)}
      >
        <CircularProgressbar value={timer.value} />
        <div className="progressValue">
          {timer.click ? (
            <div>{timer.value}</div>
          ) : (
            <div>
              <input
                className="progressInput"
                type="text"
                name=""
                onKeyPress={(e)=>onKey(e, setTimer)}
                id=""
                ref={(inputRef) => {
                  if (inputRef && !timer.click) inputRef.focus();
                }}
                onBlur={() => handleClick(setTimer)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Progression;
