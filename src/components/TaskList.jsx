import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import TaskCard from "./TaskCard";

function TaskList() {

    const { tasks } = useContext(TaskContext);

    if (tasks.length === 0)
        return <h1 className="text-4xl text-white font-bold text-center">No hay Tarea</h1>;

    return <div className="grid grid-cols-4 gap-2">
        {
            tasks.map((task, i) =>
                <TaskCard key={i} task={task}  />
            )
        }
    </div>;
}

export default TaskList;