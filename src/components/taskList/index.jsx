import React from 'react';
import Task from '../task';

function TaskList({tasks, onDeleteTask, onToggleComplete}) {
    if (tasks.length === 0) {
        return <span className="BlankTasks">Add a task!</span>
    }

    return (
        <ol>
            {tasks.map((task, index) => 
                (<Task key={index} task={task} index={index} onDeleteTask={onDeleteTask} onToggleComplete={onToggleComplete}></Task>)
            )}
        </ol>
    );
}

export default TaskList;