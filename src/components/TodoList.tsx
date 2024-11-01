import { TodoType } from "./Main";

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
						className='todoRows'
					>
						<span>{todo.isDone ? "Done" : "Not Done"}</span>
						<span>{todo.text}</span>
						<button
							className='deleteBtn'
							onClick={() => doDelete(todo.text)}
						>
							Delete
						</button>
					</div>
				);
			})}
		</>
	);
};

export default TodoList;
