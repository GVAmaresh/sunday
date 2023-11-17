import React from "react";

function UserMain() {
  return (
    <div className="userMain">
      <div
        className="userPhoto"
        style={{ backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/b/b6/Indian_girl_in_traditional_attire.jpg")` }}
      ></div>
      <div className="userName">Nireeksha</div>
      <div className="userEmail">nireeksha@gmail.com</div>
    </div>
  );
}

export default UserMain;
