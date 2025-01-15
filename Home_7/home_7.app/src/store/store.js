// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../reducer/tasksSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
