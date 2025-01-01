import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    if (value === "") {
      setFahrenheit("");
    } else {
      setFahrenheit(((parseFloat(value) * 9) / 5 + 32).toFixed(2));
    }
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    if (value === "") {
      setCelsius("");
    } else {
      setCelsius((((parseFloat(value) - 32) * 5) / 9).toFixed(2));
    }
  };

  const handleReset = () => {
    setCelsius("");
    setFahrenheit("");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300 }}>
      <TextField
        label="Цельсия"
        variant="outlined"
        value={celsius}
        onChange={handleCelsiusChange}
        type="number"
      />
      <TextField
        label="Фаренгейт"
        variant="outlined"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        type="number"
      />
      <Button variant="contained" onClick={handleReset}>
        Сбросить
      </Button>
    </Box>
  );
};

export default TemperatureConverter;
