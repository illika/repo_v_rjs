import { tasks as data } from './data/tasks';

import TaskList from './components/TaskList';
import TaskForm from './components/TaskFrom';

import { useState, useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length }]);
  };

  function deleteTask(task) {

    const newTasks = tasks.filter((e) => e != task);
    setTasks(newTasks);


  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;