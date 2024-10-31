//TODO tags for better searc

import { useState } from "react";
import TodoList from "./TodoList";

const dummyTodos: TodoType[] = [
  { text: "Complete JavaScript project", isDone: false },
  { text: "Review TypeScript basics", isDone: false },
  { text: "Plan the weekend trip", isDone: true },
  { text: "Finish reading TypeScript documentation", isDone: false },
  { text: "Prepare notes for UX/UI trial training", isDone: false },
  { text: "Test delete function in todo app", isDone: true },
  { text: "Exercise 45 minutes", isDone: false },
  { text: "Schedule client meeting", isDone: false },
  { text: "Organize Agile methodology notes", isDone: true },
  { text: "Update exercise tracker app", isDone: false },
  { text: "Buy groceries", isDone: true },
  { text: "Write markdown file for Agile content", isDone: false },
  { text: "Refactor Flutter app code", isDone: false },
  { text: "Research muscle gain diet plans", isDone: true },
  { text: "Practice pull-ups at home", isDone: false }
];

export type TodoType = {
  text: string;
  isDone: boolean;
};

const Main: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>(dummyTodos);
  const [todoText, setTodoText] = useState<string>("");

  function handleNewTodo(){
    const newTodo = {text: todoText, isDone: false}
    setTodos([...todos, newTodo])
    setTodoText("");
  }

  function handleDelete(text:string){
    const updatedTodos = todos.filter((todo)=>todo.text !== text)
    setTodos(updatedTodos)
  }


  return (
    <main>
      <input onChange={(e) => setTodoText(e.target.value)} value={todoText} />
      <button onClick={handleNewTodo}>Add New Todo</button>
      <TodoList todos={todos} doDelete={handleDelete}/>
    </main>
  );
};

export default Main;
