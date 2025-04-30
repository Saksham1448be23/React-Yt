import React, { useState } from "react";

function TodoApp() {
  // 1️⃣ Initializing an array in state
  const [tasks, setTasks] = useState([  ]);
  
  const [newTask, setNewTask] = useState("");

  // 2️⃣ Adding a new task to the array
  const addTask = () => {
    if (newTask.trim() === "") return; // Prevent empty tasks

    const newTaskObj = {
      id: tasks.length + 1, // Simple unique ID
      text: newTask,

    };

    setTasks([...tasks, newTaskObj]); // ✅ Correct way to update an array state
    setNewTask(""); // Clear input after adding
  };

  // 4️⃣ Removing an item from the array
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };


  return (
    <div>
      <h2>To-Do List</h2>

      {/* 6️⃣ Input field to add new tasks */}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>

      {/* 7️⃣ Rendering the task list */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
