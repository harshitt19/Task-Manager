// src/components/TaskDetail.js
import React from 'react';

const TaskDetail = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskDetail;
