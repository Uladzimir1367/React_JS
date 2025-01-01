import React from 'react';
import "./App.css";
import TemperatureConverter from './components/conteinertemp';
import TodoList from './components/todlist';


function App() {
  return (
    <div>
      <TemperatureConverter />
      <TodoList />
    </div>
  );
}

export default App;
