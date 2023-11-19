import React, { useRef, useState } from "react";
import TaskLevel from "./TaskLevel";

function Task() {
  const [taskList, setTaskList] = useState([
    { Basic: "Task 1" },
    { Significant: "Task 2" },
    { Basic: "Task 3" },
    { Crucial: "Task 4" },
    { Essential: "Task 5" },
  ]);
  const inputRef = useRef();
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      const inputValue = inputRef.current.value;
      setTaskList(value=>[...value, {Basic: `${inputValue}`}])
      inputRef.current.value = "";
    }
  };
  const finishTask = (e) => {
    if (e.target.style.textDecoration === "line-through")
      return (e.target.style.textDecoration = "");
    e.target.style.textDecoration = "line-through";
  };
  return (
    <div className="groupChat">
      <div className="chating">
        {taskList.map((task, index) => {
          const [key, value] = Object.entries(task)[0];
          return (
            <div className="otherChat" key={index}>
              <div className="chatName">
                Task <TaskLevel projectLevel={key} />
              </div>
              <div className="message" onDoubleClick={(e) => finishTask(e)}>
                {value}
              </div>
            </div>
          );
        })}
      </div>
      <div className="groupInput">
        <input
          type="text"
          name=""
          ref={inputRef}
          onKeyPress={handleEnterKey}
          id=""
          style={{ width: "100%", fontSize: "20px", paddingLeft: "5%" }}
        />
      </div>
    </div>
  );
}

export default Task;
