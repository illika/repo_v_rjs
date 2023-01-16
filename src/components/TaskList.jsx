import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask }) {

    if (tasks.length === 0)
        return <h1>No hay Tarea</h1>;

    return <div>
        {
            tasks.map((task, i) =>
                <TaskCard key={i} task={task} deleteTask= {deleteTask} />
            )
        }
    </div>;
}

export default TaskList;