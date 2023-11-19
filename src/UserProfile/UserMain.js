import React, { useState } from "react";

function UserMain() {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = ()=>{
    window.location.href = "http://localhost:3000/login"
  }
  return (
    <div className="userMain">
      <div
        className="userPhoto"
        style={{
          backgroundImage: isLogin
            ? `url("https://upload.wikimedia.org/wikipedia/commons/b/b6/Indian_girl_in_traditional_attire.jpg")`
            : `url("https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg")`,
        }}
      ></div>
      {isLogin ? (
        <>
          <div className="userName">Nireeksha</div>
          <div className="userEmail">nireeksha@gmail.com</div>
          <div className="userLogout">Log out</div>
        </>
      ) : (
        <div className="userLogin" onClick={handleLogin}>Login</div>
      )}
    </div>
  );
}

export default UserMain;
