// src/App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./reducer/tasksSlice";
import store from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);
  const status = useSelector((state) => state.tasks.status);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>Tasks</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} - {task.completed ? "Completed" : "Not Completed"}
            </li>
          ))}
        </ul>
      )}
      {status === "failed" && <p>Failed to load tasks.</p>}
    </div>
  );
};

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
