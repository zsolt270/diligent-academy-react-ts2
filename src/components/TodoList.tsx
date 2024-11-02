import { TodoType } from "./Main";

type TodoListProps = {
  todos: TodoType[];
  doDelete: (text: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, doDelete }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.text}>
            <span>{todo.text}</span>
            <span>{todo.isDone ? " - Done" : " - Not Done"}</span>
            <button onClick={()=>doDelete(todo.text)}>Delete</button>
          </div>
        );
      })}
    </>
  );  
};

export default TodoList;  
