import React from "react";
import ProjectDetails from "../Project/ProjectDetails";
import GroupChat from "../Chats/GroupChat";
import Task from "../Tasks/Task";
import MileStone from "../Tasks/MileStone";
import Progression from "../Project/Progression";

function MainPage() {
  return (
    <div className="mainPage">
      <ProjectDetails />

      <div className="gridElement">
        <Progression/>
        <GroupChat />
        <Task />
        <MileStone />
      </div>
    </div>
  );
}

export default MainPage;
