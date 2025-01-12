import React from "react";
import { Provider } from "react-redux";
import store from "./components/store";
import ThemeSwitcher from "./components/ThemeSwitcher";


const App = () => {
  return (
    <Provider store={store}>
      <ThemeSwitcher />
    </Provider>
  );
};

export default App;
