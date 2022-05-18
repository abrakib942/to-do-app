import React, { useState } from "react";

const TaskCard = ({ task }) => {
  const { _id, name, description } = task;
  const [tasks, setTasks] = useState([]);

  const handleDelete = (id) => {
    const proceed = window.confirm("You want to delete. Are you sure?");

    if (proceed) {
      const url = `http://localhost:5000/task/${id}`;

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
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <div class="card-actions justify-end">
            <button
              onClick={() => handleDelete(task._id)}
              class="btn btn-primary"
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
