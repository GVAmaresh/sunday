import React from "react";
import TaskLevel from "./TaskLevel";
import MileStoneTask from "./MileStoneTask";

function MileStone() {
  const finishTask = (e) => {
    if (e.target.style.textDecoration === "line-through")
      return (e.target.style.textDecoration = "");
    e.target.style.textDecoration = "line-through";
  };
  function updateInput(e){
    if(e.key === "Enter"){

    }
  }
  return (
    <div className="groupChat">
      <div className="chating">

        <MileStoneTask task={"new Task"}/>
        <MileStoneTask task={"my Task"}/>
        <MileStoneTask task={"gone Task"}/>
{/*         
        <div className="otherChat">
          <div className="chatName">
            Task <TaskLevel />
          </div>
          <div className="message" onDoubleClick={(e) => finishTask(e)}>
            Hi This is Task
          </div>
        </div>

        <div className="otherChat">
          <div className="chatName">
            Task <TaskLevel />
          </div>
          <div className="message" onDoubleClick={(e) => finishTask(e)}>
            Hi This is Task
          </div>
        </div>

        <div className="otherChat">
          <div className="chatName">
            Task <TaskLevel />
          </div>
          <div className="message" onDoubleClick={(e) => finishTask(e)}>
            Hi This is Task
          </div>
        </div>

        <div className="otherChat">
          <div className="chatName">
            Task <TaskLevel />
          </div>
          <div className="message" onDoubleClick={(e) => finishTask(e)}>
            Hi This is Task
          </div>
        </div> */}
      </div>
      <div className="groupInput">
        <input
          type="text"
          name=""
          id=""
          onKeyPress={(e)=>updateInput(e)}
          style={{ width: "100%", fontSize: "20px", paddingLeft: "5%" }}
        />
      </div>
    </div>
  );
}

export default MileStone;
