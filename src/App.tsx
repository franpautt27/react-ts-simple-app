import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Task } from "./interfaces/Task";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "learn react",
      description: "learn react",
      completed: false,
    },
  ]);

  function getCurrentTimeStamp(): number {
    return new Date().getTime();
  }
  function addNewTask(task: Task) {
    setTasks([
      ...tasks,
      { ...task, id: getCurrentTimeStamp(), completed: false },
    ]);
  }

  function deleteATask(id: number) {
    return setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="React logo" style={{ width: "4rem" }} />
            React and Typescript
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewTask={addNewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList deleteATask={deleteATask} tasks={tasks} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
