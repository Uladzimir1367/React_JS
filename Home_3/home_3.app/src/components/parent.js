import React, { useState } from "react";
import Button from '@mui/material/Button';

function ParentCounter() {
  const [count, setCount] = useState(0);
  const upCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Родитель</h2>
      <ChildCount count={count} />
      <Button onClick={upCount}variant="contained">Плюс один</Button>
      
    </div>
  );
}

function ChildCount({ count }) {
  return (
    <div>
      <p>Счётчик Внутри</p>
      <p>Значение счётчика {count}</p>
    </div>
  );
}

export default ParentCounter;
