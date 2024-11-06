import { useState } from "react";
import TodoList from "./TodoList";
import { dummyTodos } from "../lib/const";
import { TodoType } from "../lib/types";

const Main: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>(dummyTodos);
  const [todoText, setTodoText] = useState<string>("");

  function handleAddTodo() {
    setTodos((prev) => [...prev, { text: todoText, isDone: false }]);
    setTodoText("");
  }

  function handleDelete(text: string) {
    setTodos((prev) => prev.filter((todo) => todo.text !== text));
  }

  return (
    <main>
      <div id="todoContainer">
        <input
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
          value={todoText}
          placeholder="Add new todos..."
        />
        {todoText && (
          <button id="addBtn" onClick={handleAddTodo}>
            Add
          </button>
        )}
        <TodoList todos={todos} doDelete={handleDelete} />
      </div>
    </main>
  );
};

export default Main;
