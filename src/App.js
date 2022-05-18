import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddTask from "./Pages/AddTask";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Navbar from "./Pages/Navbar";
import TaskDetails from "./Pages/TaskDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/addTask"
          element={
            <ProtectedRoute>
              <AddTask />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <TaskDetails />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
