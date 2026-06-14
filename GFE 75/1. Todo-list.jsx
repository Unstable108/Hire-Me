import { useState } from 'react';

//bad code
let id = 0;

const Initial_Tasks = [
  { id: id++, label: 'Walk the dog' },
  { id: id++, label: 'Water the plants' },
  { id: id++, label: 'Wash the dishes' },
]


export default function App() {
  const [task, setTask] = useState(Initial_Tasks);
  const [newtask, setNewtask] = useState("");

  const submitHandler = (e) => {
    if (!newtask.trim()) return;

    setTask([...task, { id: id++, label: newtask }]);
    setNewtask("");
  }

  const deleteHandler = (itemKey) => {
    setTask(task.filter((singleTask)=>singleTask.id != itemKey));
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
