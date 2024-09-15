import React, {useState} from 'react';
import AddTask from '../addTask';
import TaskList from '../taskList';

function ToDoList() {
    const[tasks, setTasks] = useState([]);

    function addTask(newTask){
        setTasks(t => [{text: newTask, complete: false}, ...t]);
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function toggleComplete(index) {
        setTasks(tasks.map((task, i) => i === index ? {text: task.text, completed: !task.completed} : task));
    }

    return(
        <div>
            <AddTask onAddTask = {addTask}/>
            <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleComplete={toggleComplete}/>    
        </div>
    );
}

export default ToDoList;