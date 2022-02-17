import { useState } from "react";

const ShowFilters = (props) => {
  const [showCompleted, setShowCompleted] = useState(false);

  const handleShowCompleted = (e, value) => {
    e.preventDefault();
    props.handleShowCompleted(value);
    setShowCompleted(value);
  };
  return (
    <div className="list-group-item list-group-item-default d-flex justify-content-start">
      <button
        type="button"
        className={
          !props.show
            ? "btn btn-secondary bi bi-eye"
            : "btn btn-secondary bi bi-eye-slash"
        }
        onClick={(e) => handleShowCompleted(e, !showCompleted)}
      >
        &nbsp; {props.show ? "Hide Completed" : "Show Completed"}
      </button>
    </div>
  );
};
export default ShowFilters;
