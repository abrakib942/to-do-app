import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar bg-primary text-white">
      <div class="flex-1">
        <Link to="/" class="btn btn-ghost normal-case text-xl">
          ToDoApp
        </Link>
      </div>
      <div class="flex-1 ">
        <ul className="flex mr-6 gap-5">
          <li>
            <Link to="/addTask">Add Task</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
