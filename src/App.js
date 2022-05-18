import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddTask from "./Pages/AddTask";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Navbar from "./Pages/Navbar";
import TaskDetails from "./Pages/TaskDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addTask" element={<AddTask />}></Route>
        <Route path="/tasks" element={<TaskDetails />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
