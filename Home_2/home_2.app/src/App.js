import logo from "./logo.svg";
import "./App.css";
import CommentsList from "./components/message";


function App() {
  return (
    <div className="App">
      <h1>Список комментариев</h1>
      < CommentsList />
    </div>
  );
}

export default App;
