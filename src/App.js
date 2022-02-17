import "./App.css";
import data from "./data.json";
import { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import ShowFilters from "./components/ShowFilters";

const App = () => {
  const [list, settodoList] = useState(data);
  const [show, setShow] = useState(false);

  const handleSubmit = (task) => {
    settodoList([
      ...list,
      { id: list.length + 1, task: task, complete: false },
    ]);
  };

  const handleComplete = (id) => {
    const data = list.map((todo) => {
      return todo.id === id
        ? { ...todo, complete: !todo.complete }
        : { ...todo };
    });
    settodoList(data);
  };

  const handleDelete = (id) => {
    const data = list.filter((todo) => {
      return todo.id !== id;
    });
    settodoList(data);
  };

  const handleAdd = (id, task, complete) => {
    const data = list.map((todo) => {
      return todo.id === id
        ? { ...todo, id: id, task: task, complete: complete }
        : { ...todo };
    });
    settodoList(data);
  };

  const handleShowCompleted = (showCompleted) => {
    setShow(showCompleted);
  };

  return (
    <div className="card mx-auto mt-5 w-50 alert alert-dark">
      <div className="card-body">
        <Form handleSubmit={handleSubmit} />
        <h4>ToDoList</h4>
        {list.length !== 0 ? (
          <span>
            <ShowFilters
              handleShowCompleted={handleShowCompleted}
              show={show}
            />
            <List
              data={list}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
              handleAdd={handleAdd}
              show={show}
            />
          </span>
        ) : (
          <p>
            <br />
            No More Tasks ToDo
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
