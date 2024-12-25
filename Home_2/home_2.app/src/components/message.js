import React, { useState } from "react";

// Компонент Show
function Show({ data }) {
  const [block, setBlock] = useState(true);
  const blockShow = () => {
    setBlock(!block);
  };

  return (
    <div>
      <button onClick={blockShow}>Показать или скрыть</button>
      <p style={{ display: block ? "block" : "none" }}>{data}</p>
    </div>
  );
}

// Компонент MessagesList
export function MessagesList() {
  const [messages, setMessages] = useState([
    { id: "id1", text: "Это первый комментарий" },
    { id: "id2", text: "Это второй комментарий" },
    { id: "id3", text: "Это третий комментарий" },
  ]);

  return (
    <div>
      {messages.map((message) => (
        <Show key={message.id} data={message.text} />
      ))}
    </div>
  );
}

export default MessagesList;