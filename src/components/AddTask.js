// src/components/AddTask.js
import React, { useState } from 'react';
import axios from 'axios';

const AddTask = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/tasks', { title, description, dueDate })
      .then(response => {
        setTitle('');
        setDescription('');
        setDueDate('');
        setMessage('Task added successfully!');
        if (onTaskAdded) {
          onTaskAdded(response.data);
        }
      })
      .catch(error => {
        console.error('There was an error creating the task!', error);
        setMessage('Error adding task.');
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
        <button type="submit">Add Task</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddTask;
