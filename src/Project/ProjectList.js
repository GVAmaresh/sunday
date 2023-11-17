import React, { useContext } from "react";
import { UserContext } from "../App";
function ProjectList() {
  //   const [createProject, setCreateProject] = useState(false);
  const { createProject, setCreateProject } = useContext(UserContext);
  const handleProjectClick = (projectId) => {
    document.querySelectorAll(".project").forEach((e) => {
      if (parseInt(e.id) === projectId)
        e.style.boxShadow = "2px 2px 4px 2px rgba(0, 0, 0, 0.2)";
      else {
        e.style.boxShadow = "";
      }
    });
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Pressed");
    }
  };

  return (
    <div className="projectList">
      <div className="projectHeading">Projects</div>
      {Array.from({ length: 5 }, (_, index) => (
        <div
          className="project"
          id={index}
          onClick={() => {
            handleProjectClick(index);
            setCreateProject(false);
          }}
          key={index}
        >
          Nokia Website
        </div>
      ))}
      {createProject ? (
        <div className="newProject" onKeyPress={handleKeyPress}>
          <input
            type="text"
            className="projectTitle"
            onBlur={() => setCreateProject(false)}
            ref={(inputRef) => {
              if (inputRef && createProject) {
                inputRef.focus();
              }
            }}
            name=""
            id=""
          />
        </div>
      ) : (
        <div
          className="createProject"
          onClick={() => {
            setCreateProject(true);
            handleProjectClick("");
          }}
        >
          +
        </div>
      )}
    </div>
  );
}

export default ProjectList;
