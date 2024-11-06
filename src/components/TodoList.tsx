import { TodoType } from "./Main";
import { BsFillTrash3Fill } from "react-icons/bs";

type Props = {
	todos: TodoType[];
	doDelete: (text: string) => void;
};

const TodoList: React.FC<Props> = ({ todos, doDelete }) => {
	return (
		<>
			{todos.map((todo) => {
				return (
					<div
						key={todo.text}
						className='todoRows flex align-items-center'
					>
						<div className='flex align-items-center'>
							<div className={todo.isDone ? "completed" : "notCompleted"}></div>
							{todo.isDone ? <del>{todo.text}</del> : <span>{todo.text}</span>}
						</div>
						<button
							className='deleteBtn'
							onClick={() => doDelete(todo.text)}
						>
							<BsFillTrash3Fill />
						</button>
					</div>
				);
			})}
		</>
	);
};

export default TodoList;
