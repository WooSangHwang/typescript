import { Todo } from "../types";
import { useTodoDispatch } from "../App";

interface Props extends Todo {
  onDelete: (id: number) => void;
}

const TodoItem = (props: Props) => {
  const dippatch = useTodoDispatch();
  const onClick = () => {
    dippatch.onDelete(props.id);
  };

  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClick}>삭제</button>
    </div>
  );
};

export default TodoItem;
