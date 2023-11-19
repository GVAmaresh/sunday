import React, { useState } from "react";

function ProjectDetails() {
  const [changeInput, setChangeInput] = useState({
    click: false,
    value: "Title of the project ",
  });
  const [changeOverview, setChangeOverview] = useState({
    click: false,
    value: "Overview of the project ",
  });
  const changeValue = (e, setChange) => {
    if (e.key === "Enter") {
      setChange({ click: false, value: e.target.value });
    }
  };
  return (
    <div className="projectDetails">
      {changeInput.click ? (
        <div>
          <input
            className="inputHeading"
            onBlur={() => setChangeInput(false)}
            type="text"
            onKeyPress={(e) => changeValue(e, setChangeInput)}
            ref={(inputRef) => {
              if (inputRef && changeInput) inputRef.focus();
            }}
            name=""
            id=""
          />
        </div>
      ) : (
        <div
          className="heading"
          onDoubleClick={() => setChangeInput((e) => ({ ...e, click: true }))}
        >
          {changeInput.value}
        </div>
      )}
      {changeOverview.click ? (
        <div>
          <input
            type="text"
            name=""
            ref={(inputRef) => {
              if (inputRef && changeOverview) inputRef.focus();
            }}
            onKeyPress={(e) => changeValue(e, setChangeOverview)}
            className="overviewInput"
            onBlur={() => setChangeOverview(false)}
            id=""
          />
        </div>
      ) : (
        <div className="overview" onDoubleClick={() => setChangeOverview((e) => ({ ...e, click: true }))}>
          {changeOverview.value}
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;
