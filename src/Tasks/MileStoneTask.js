import React, { useState } from "react";
import TaskLevel from "./TaskLevel";

function SubTask({ task = [] }) {
  const [useInput, setUseInput] = useState({ click: false, value: "" });
  const [newTask, setNewTask] = useState([...task]);
  const finishTask = (e) => {
    if (e.target.style.textDecoration === "line-through")
      return (e.target.style.textDecoration = "");
    e.target.style.textDecoration = "line-through";
  };
  const updateInput = (e) => {
    if (e.key === "Enter") {
      setNewTask((arr) => [...arr, e.target.value]);
      setUseInput({ click: false, value: "" });
    }
  };
  return (
    <>
      {newTask.map((e, index) => (
        <div
          key={index}
          className="subTask"
          onDoubleClick={(e) => finishTask(e)}
        >
          {e}
        </div>
      ))}
      {useInput.click ? (
        <div className="useInput">
          <input
            type="text"
            name=""
            id=""
            className="myInput"
            onKeyPress={(e) => {
              updateInput(e);
            }}
            ref={(inputRef) => {
              if (inputRef && useInput.click) inputRef.focus();
            }}
            onBlur={() => setUseInput({ click: false, value: "" })}
          />
        </div>
      ) : (
        <div
          className="addInput"
          onClick={() => setUseInput({ click: true, value: "" })}
        >
          +
        </div>
      )}
    </>
  );
}

function MileStoneTask({ task }) {
  const [open, setOpen] = useState(false);
  // const [useTask, setUseTask] = useState([...task]);
  const finishTask = (e) => {
    if (e.target.style.textDecoration === "line-through")
      return (e.target.style.textDecoration = "");
    e.target.style.textDecoration = "line-through";
  };
  const openFunction = (e) => {
    if (e.target.closest(".message")) {
      return;
    }
    if (e.target.closest(".subTask")) {
      return;
    }
    if (e.target.closest(".myInput")) {
      return;
    }
    if (e.target.closest(".useInput")) {
      return;
    }
    if (e.target.closest(".addInput")) {
      return;
    }
    setOpen(!open);
  };
  return (
    <div className="milestoneTask">
      <div className="otherChat" onClick={(e) => openFunction(e)}>
        <div className="chatName">
          Task <TaskLevel />
        </div>
        <div
          className="message"
          style={{ borderBottom: open?"1px solid black":null, paddingBottom: open?'3%':null }}
          onDoubleClick={(e) => finishTask(e)}
        >
          {task}
        </div>
        {open ? (
          <>
            <SubTask />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default MileStoneTask;
