import React from "react";
import "./Message.css";

function Message(props) {
  return (
    <div className="message" style={{ color: props.color }}>
      {props.text}
    </div>
  );
}

export default Message;
