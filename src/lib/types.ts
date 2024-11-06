export type TodoListProps = {
  todos: TodoType[];
  doDelete: (text: string) => void;
};

export type TodoType = {
  text: string;
  isDone: boolean;
};