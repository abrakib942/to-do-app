import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  };

  return (
    <div className="navbar bg-primary text-white">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          ToDoApp
        </Link>
      </div>
      <div className="flex-1 ">
        <ul className="flex mr-6 gap-5">
          <li>
            <Link to="/addTask">Add Task</Link>
          </li>
          <li>
            {user ? (
              <button onClick={logOut} className="btn btn-ghost btn-xs">
                Log Out
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
