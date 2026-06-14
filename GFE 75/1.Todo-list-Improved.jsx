// improved version
import { useState } from 'react';


const Initial_Tasks = [
  { id: 'TASK_1', label: 'Walk the dog' },
  { id: 'TASK_2', label: 'Water the plants' },
  { id: 'TASK_3', label: 'Wash the dishes' },
]


export default function App() {
  const [task, setTask] = useState(Initial_Tasks);
  const [newtask, setNewtask] = useState("");

  const submitHandler = (e) => {
    if (!newtask.trim()) return;

    setTask((prevTasks) => [
      ...prevTasks, 
      { id: Date.now(), label: newtask.trim() }
    ]);

    setNewtask("");
  }

  const deleteHandler = (taskId) => {
    setTask((prevTasks) => prevTasks.filter((singleTask) => singleTask.id !== taskId));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add your task"
          value={newtask}
          onChange={(e) => setNewtask(e.target.value)}
        />
        <div>
          <button onClick={submitHandler}>Submit</button>
        </div>
      </div>
      <ul>
        {task.map((item) => (<li key={item.id}>
          <span>{item.label} </span>
          <button onClick={() => deleteHandler(item.id)}>Delete</button>
        </li>))}
      </ul>
    </div>
  );
}
