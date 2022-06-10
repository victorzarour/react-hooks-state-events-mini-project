import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

const [category, setCategory] = useState("All")

const [submittedData, setSubmittedData] = useState([]);

function taskSubmit(newTask){
  setSubmittedData([...submittedData, newTask]);
}

const filteredTasks = TASKS.filter((task) => category === "All" || task.category === category)
const filteredNewTasks = submittedData.filter((task) => category === "All" || task.category === category)

const allTasks = [...filteredTasks, ...filteredNewTasks]

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} category={category} setCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={taskSubmit}/>
      <TaskList tasks={allTasks}/>
    </div>
  );
}

export default App;
