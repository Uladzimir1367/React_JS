import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <Message text="Hello, this is a message!" color="red" />
      <Message text="Another message here!" color="blue" />
      <Message text="Yet another message!" color="green" />
    </div>
  );
}

export default App;
