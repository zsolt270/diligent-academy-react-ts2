import { useState } from "react";
import TodoList from "./TodoList";
import { dummyTodos } from "../lib/const";

export type TodoType = {
  text: string;
  isDone: boolean;
};

const Main: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>(dummyTodos);
  const [todoText, setTodoText] = useState<string>("");

  function handleAddTodo() {
    setTodos((prev)=>[...prev, { text: todoText, isDone: false }]);
    setTodoText("");
  }

  function handleDelete(text: string) {
    setTodos((prev)=>prev.filter((todo) => todo.text !== text));
  }

  return (
    <main>
      <input onChange={(e) => setTodoText(e.target.value)} value={todoText} />
      <button onClick={handleAddTodo}>Add New Todo</button>
      <TodoList todos={todos} doDelete={handleDelete} />
    </main>
  );
};

export default Main;
