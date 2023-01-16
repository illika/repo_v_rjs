import { createContext, useState, useEffect } from "react";

import { tasks as data } from '../data/tasks';


export const TaskContext = createContext();

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]);

    const createTask = (task) => {
        setTasks([
            ...tasks,
            { ...task, id: tasks.length }
        ]);
    };

    function deleteTask(task) {
        const newTasks = tasks.filter((e) => e != task);
        setTasks(newTasks);
    }

    useEffect(() => {
        setTasks(data);
      }, []);

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask,
        }}>
            {props.children}
        </TaskContext.Provider>
    );
}