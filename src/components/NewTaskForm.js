import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

const [taskDetails, setTaskDetails] = useState("")
const [taskCategory, setTaskCategory] = useState("Code")

const categoryDropdown = categories.map((category, index) => {
  if (index > 0) return <option key={index}>{category}</option>
})

function handleTaskDetails(e) {
  setTaskDetails(e.target.value)
}

function handleTaskCategory(e) {
  setTaskCategory(e.target.value)
}

function taskSubmit(e) {
  e.preventDefault()

    onTaskFormSubmit({
    text: taskDetails,
    category: taskCategory,
  });
};

  return (
    <form className="new-task-form" onSubmit={taskSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskDetails} onChange={handleTaskDetails}/>
      </label>
      <label>
        Category
        <select name="category" value={taskCategory} onChange={handleTaskCategory}>
          {categoryDropdown}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
