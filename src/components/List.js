import Display from "./Display";

const List = (props) => {
  let todoList = !props.show ? props.data.filter(todo => {return !todo.complete}) : props.data;
  return todoList.map((todo) => (
    <Display
      key={todo.id}
      todo={todo}
      handleComplete={props.handleComplete}
      handleDelete={props.handleDelete}
      handleAdd={props.handleAdd}
    />
  ));
};

export default List;
