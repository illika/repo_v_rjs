import { useState } from 'react';

function TaskForm({ createTask }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            title: title,
            description: description
        };
        createTask(newTask);
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Escribe Tarea"
                onChange={
                    (e) => setTitle(e.target.value)
                }
                value={title}
            />
            <textarea
                placeholder="Escribe Descripción"
                onChange={
                    (e) => setDescription(e.target.value)
                }
                value={description}
            />
            <button>
                Guardar
            </button>
        </form>
    );
}

export default TaskForm;