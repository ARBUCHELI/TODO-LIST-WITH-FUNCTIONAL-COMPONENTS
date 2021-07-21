import React, { useState } from "react";
import NewTask from "./NewTask";
import TasksList from "./TasksList";

export default function AppFunction() {
  const [newTask, setNewTask] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };
  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter(
      (task) => task.id !== taskIdToRemove
    ));
  };

  return (
    <main>
      <h1 style={{marginTop: "1em", fontFamily: "impact", fontSize: "3em", color: "white"}}>Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
      <footer>
          <p>Author: Andres R. Bucheli</p>
          <p>BUCHELI WEB DEVELOPMENT ©</p>
          <p><a href="mailto:radio_seattle@hotmail.com">radio_seattle@hotmail.com</a></p>
        </footer>
    </main>
  );
}
