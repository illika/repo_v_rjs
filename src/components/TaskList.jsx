import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import TaskCard from "./TaskCard";

function TaskList() {

    const { tasks } = useContext(TaskContext);

    if (tasks.length === 0)
        return <h1>No hay Tarea</h1>;

    return <div>
        {
            tasks.map((task, i) =>
                <TaskCard key={i} task={task}  />
            )
        }
    </div>;
}

export default TaskList;