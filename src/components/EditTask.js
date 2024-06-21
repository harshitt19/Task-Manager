// src/components/EditTask.js
import React, { useState } from 'react';
import axios from 'axios';

const EditTask = ({ task, onEditComplete }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:5000/api/tasks/${task._id}`, { title, description, dueDate })
      .then(response => {
        onEditComplete();
      })
      .catch(error => {
        console.error('There was an error updating the task!', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <input
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          required
        />
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;
