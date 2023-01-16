function TaskCard({ task, deleteTask }) {
    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description} - {task.id}</p>
            <button onClick={() => deleteTask(task)}>
                Eliminar Tarea
            </button>
        </div>
    );
}

export default TaskCard;