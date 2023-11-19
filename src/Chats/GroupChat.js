import React, { useRef, useState } from "react";

function GroupChat() {
  const [groupChating, setGroupChating] = useState([
    { name: "Venki", who: "otherChat", chat: "Hi How are you" },
    { name: "Varun", who: "otherChat", chat: "This is about me" },
    { name: "Charan", who: "otherChat", chat: "This is also me" },
    { name: "Amaresh", who: "myChat", chat: "But this is me" },
    { name: "Charan", who: "otherChat", chat: "This is also me" },
  ]);
  const inputRef = useRef();
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      const inputValue = inputRef.current.value;
      setGroupChating(e=>[...e, {name: "Amaresh", who: "myChat", chat: inputValue}])
      inputRef.current.value = "";
    }
  };
  return (
    <div className="groupChat">
      <div className="chating">
        {groupChating.map((e) => (
          <div className={e.who}>
            <div className="chatName">{e.name}</div>
            <div className="message">{e.chat}</div>
          </div>
        ))}

        {/* <div className="otherChat">
          <div className="chatName">Venki</div>
          <div className="message">Hi This is Venki</div>
        </div>
        <div className="otherChat">
          <div className="chatName">Venki</div>
          <div className="message">Hi This is Venki</div>
        </div>
        <div className="myChat">
          <div className="chatName">Venki</div>
          <div className="message">Hi This is Venki</div>
        </div>
        <div className="myChat">
          <div className="chatName">Venki</div>
          <div className="message">Hi This is Venki</div>
        </div>
        <div className="myChat">
          <div className="chatName">Venki</div>
          <div className="message">Hi This is Venki</div>
        </div>
        <div className="otherChat">
          <div className="chatName">Venki</div>
          <div className="message">Hi This is Venki</div>
        </div>
        <div className="otherChat">
          <div className="chatName">Venki</div>
          <div className="message">Hi This is Venki</div>
        </div>
        <div className="otherChat">
          <div className="chatName">Venki</div>
          <div className="message">Hi This is Venki</div>
        </div>
        <div className="otherChat">
          <div className="chatName">Venki</div>
          <div className="message">Hi This is Venki</div>
        </div> */}
      </div>
      <div className="groupInput">
        <input
          type="text"
          name=""
          id=""
          ref={inputRef}
          onKeyDown={handleEnterKey}
          style={{ width: "100%", fontSize: "20px", paddingLeft: "5%" }}
        />
      </div>
    </div>
  );
}

export default GroupChat;
