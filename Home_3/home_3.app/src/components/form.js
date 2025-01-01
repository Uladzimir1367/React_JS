import React, { useEffect, useState } from "react";



const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [submitValue, setSubmittedValue] = useState("");

  useEffect(() => {
    console.log("Input value changed:", inputValue);
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submitValue && <p>Submit value: {submitValue}</p>}
    </div>
  );
};

export default InputForm;
