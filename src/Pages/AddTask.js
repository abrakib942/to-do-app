import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddTask = () => {
  const nameRef = useRef();
  const desRef = useRef();
  const navigate = useNavigate();

  //   const [task, getTask] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:5000/task")
  //       .then((res) => res.json())
  //       .then((data) => getTask(data));
  //   });

  const handleAddTask = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const description = desRef.current.value;

    const task = { name, description };

    fetch("http://localhost:5000/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    if (task) {
      toast.success("task added successfully");
    }

    event.target.reset();
  };

  return (
    <div>
      <h2 className="text-3xl text-center my-10">Add Task</h2>
      <form onSubmit={handleAddTask}>
        <input
          ref={nameRef}
          type="text"
          placeholder="Name"
          className="input input-bordered input-primary w-96 flex flex-row mx-auto mb-4"
          required
        />
        <textarea
          ref={desRef}
          type="text"
          placeholder="Description"
          className="input input-bordered input-primary w-96 flex flex-row mx-auto mb-4"
          required
        />
        <input
          type="submit"
          value="Add"
          className="btn btn-primary w-96 flex flex-row mx-auto mb-4"
        />
      </form>
      <Link
        to="/tasks"
        class="btn btn-outline btn-primary w-96 flex flex-row mx-auto mb-4"
      >
        Show Tasks
      </Link>
    </div>
  );
};

export default AddTask;
