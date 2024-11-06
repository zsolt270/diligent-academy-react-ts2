import Header from "./components/Header";
import Main from "./components/Main";
import "./app.css";

const App: React.FC = () => {
  return (
    <>
      <Header>
        <h1>Todo App</h1>
      </Header>
      <Main />
    </>
  );
};

export default App;
