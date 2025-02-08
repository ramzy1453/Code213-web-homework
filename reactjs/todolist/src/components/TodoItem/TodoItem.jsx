import "./TodoItem.css";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <div>{props.title}</div>
      <div>X</div>
    </div>
  );
}

export default TodoItem;
