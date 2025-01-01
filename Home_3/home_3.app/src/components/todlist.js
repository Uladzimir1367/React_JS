import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Box sx={{ width: 400, margin: "0 auto", padding: 2 }}>
      <TextField
        label="Новая задача"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleAddTask} sx={{ marginTop: 2 }}>
        Добавить
      </Button>
      <List sx={{ marginTop: 2 }}>
        {tasks.map((task, index) => (
          <Card key={index} sx={{ marginBottom: 2 }}>
            <CardContent>
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteTask(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={task} />
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
