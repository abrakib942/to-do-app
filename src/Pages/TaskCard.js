import React, { useState } from "react";

const TaskCard = ({ task }) => {
  const { _id, name, description } = task;
  const [tasks, setTasks] = useState([]);

  const handleDelete = (id) => {
    const proceed = window.confirm("You want to delete. Are you sure?");

    if (proceed) {
      const url = `https://fast-scrubland-31177.herokuapp.com/task/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = tasks.filter((task) => task._id !== id);
          setTasks(remaining);
          window.location.reload(false);
        });
    }
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDelete(task._id)}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
