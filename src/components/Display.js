import { useState } from "react";

const Display = (props) => {
  const [edit, setEditable] = useState(false);
  const [editData, setEdittedData] = useState(props.todo.task);

  const handleInput = (e) => {
    e.preventDefault();
    console.log("Are you here");
    setEdittedData(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    props.handleAdd(props.todo.id, editData, props.todo.complete);
    setEditable(false);
  };

  return (
    <div className="list-group-item list-group-item-default d-flex justify-content-between">
      <div className="form-check d-flex align-items-center">
        <input
          type="checkbox"
          checked={props.todo.complete}
          className="form-check-input p-2 text-break"
          onChange={() => props.handleComplete(props.todo.id)}
        />
        {!edit ? (
          <span
            className={
              props.todo.complete
                ? "form-check-label p-2 text-break strike"
                : "form-check-label p-2 text-break"
            }
          >
            {props.todo.task}
          </span>
        ) : (
          <input type="text" value={editData} onChange={handleInput} />
        )}
      </div>
      {!props.todo.complete ? (
        <div className="d-flex align-items-center">
          {!edit ? (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setEditable(!edit)}
            >
              <span className="bi bi-pencil" aria-hidden="true"></span>
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAdd}
            >
              <span className="bi bi-plus" aria-hidden="true"></span>
            </button>
          )}
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.handleDelete(props.todo.id)}
          >
            <span className="bi bi-trash" aria-hidden="true"></span>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Display;
