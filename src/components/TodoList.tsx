import { TodoListProps } from "../lib/types";
import { BsFillTrash3Fill } from "react-icons/bs";

const TodoList: React.FC<TodoListProps> = ({ todos, doDelete }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.text} className="todoRows flex align-items-center">
            {todo.isDone ? (
              <>
                <div className="completed"></div>
                <del>{todo.text}</del>
              </>
            ) : (
              <>
                <div className="notCompleted"></div>
                <span>{todo.text}</span>
              </>
            )}
            <button className="deleteBtn" onClick={() => doDelete(todo.text)}>
              <BsFillTrash3Fill />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
