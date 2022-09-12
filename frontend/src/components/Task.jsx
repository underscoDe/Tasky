import React from "react";

const Task = ({ taskData }) => {
  return (
    <div className="task p-2 mt-2">
      <div className="task-content">{taskData.content}</div>
    </div>
  );
};

export default Task;
