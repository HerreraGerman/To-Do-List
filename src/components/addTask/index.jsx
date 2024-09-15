import React, {useState} from 'react';
import Title from "../title";

function AddTask({onAddTask}) {
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleAddTask() {
        if (newTask.trim() !== "") { // Trim elimina los espacios en blanco de los extremos
            onAddTask(newTask); // Llama a la funcion pasada desde el componente padre (toDoList.jsx)
            setNewTask(""); // Vacia la barra para ingresar otra tarea
        }
    }

    return (
        <div>
            <Title title={'Ger/Mane To-Do List'}></Title>
            <div className="AddBar">
                <input type="text" placeholder="Add task..." value={newTask} onChange={handleInputChange}/>
                <button classNme="add" onClick={handleAddTask}> Add </button>
            </div>
        </div>
    );
}

export default AddTask;