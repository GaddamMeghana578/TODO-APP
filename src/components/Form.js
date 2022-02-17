import { useState } from "react";

const Form = (props) => {
  const [task, AddTask] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    AddTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(task);
    AddTask("");
  };
  return (
    <>
      <h3 className="text-center card-title">ToDo App</h3>
      <form>
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={task}
              placeholder="Enter new ToDo.."
              aria-label="ToDo"
              aria-describedby="basic-addon2"
              onChange={handleInput}
            />
            <button
              id="addButton"
              data-clicktype="addtodo"
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              <span
                className="bi bi-plus fs-4"
                aria-hidden="true"
                data-clicktype="addtodo"
              ></span>
            </button>
          </div>
          <small id="ToDoHelp" className="form-text text-muted">
            Add tasks to be done.
          </small>
        </div>
      </form>
      <br />
    </>
  );
};

export default Form;
