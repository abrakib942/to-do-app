import React, { useEffect, useState } from "react";

import TaskCard from "./TaskCard";

const TaskDetails = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/task`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl text-center">Task Details: {tasks.length} </h2>
      <div className="grid lg:grid-cols-2 gap-4 justify-items-center">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default TaskDetails;
