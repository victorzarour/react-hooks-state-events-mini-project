import React from "react";

function Task({text, category}) {

  function deleteTask(e){
    e.target.parentNode.remove()
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteTask}>X</button>
    </div>
  );
}

export default Task;
