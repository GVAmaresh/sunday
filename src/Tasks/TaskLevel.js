import React, { useEffect, useState } from "react";

function TaskLevel({projectLevel = "Noteworthy"}) {
  const [level, setLevel] = useState({
    level: "Basic",
    color: "#0000FF",
    index: 0,
  });
  const levelColors = {
    Basic: { color: "#0000FF", fontSize: "16px", fontWeight: "400" },
    Optional: { color: "#808080", fontSize: "18px", fontWeight: "400" },
    Significant: { color: "#FFFF00", fontSize: "20px", fontWeight: "500" },
    Noteworthy: { color: "#00FF00", fontSize: "22px", fontWeight: "600" },
    Essential: { color: "#FF0000", fontSize: "24px", fontWeight: "700" },
    Crucial: { color: "#FFA500", fontSize: "26px", fontWeight: "800" },
    Peripheral: { color: "#800080", fontSize: "28px", fontWeight: "900" },
  };
  const levels = Object.entries(levelColors);
  useEffect(() => {
    Array.from({ length: 7 }, (_, index) => {
      if (levels[index][0] === projectLevel) {
        setLevel({ level: levels[index][0], color: levels[index][1].color, index: index });
        console.log("Running")
        return;
      }
    });
  }, [projectLevel]);

  const keysArray = Object.keys(levelColors);
  const changeLevel = () => {
    console.log("changeLevel clicked");
    if (level.index + 1 < 7) {
      return setLevel({
        level: keysArray[level.index + 1],
        color: levelColors[keysArray[level.index + 1]].color,
        index: level.index + 1,
      });
    }
    setLevel({
      level: keysArray[0],
      color: levelColors[keysArray[0]].color,
      index: 0,
    });
  };
  return (
    <>
      <span
        className="level"
        onDoubleClick={changeLevel}
        style={{
          color: `${level.color}`,
        }}
      >
        @{level.level}
      </span>
    </>
  );
}

export default TaskLevel;
