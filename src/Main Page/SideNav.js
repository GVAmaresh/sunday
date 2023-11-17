import React, { useContext } from "react";
import UserMain from "../UserProfile/UserMain";
import ProjectList from "../Project/ProjectList";
import { UserContext } from "../App";
function SideNav() {
  const {setCreateProject} = useContext(UserContext);
  return (
    <div className="sideNav">
      <div className="userProfile">
        <UserMain />
        <ProjectList />
      </div>
    </div>
  );
}

export default SideNav;
