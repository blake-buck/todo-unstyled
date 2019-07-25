import React from 'react';

function Task(props){
    const {content, deleteTask, isComplete, completeTask} = props;

    return(
        <div>
            {isComplete ? <p style={{textDecoration:'line-through'}}>{content}</p> : <p>{content}</p>}
            <button onClick={deleteTask}>Delete</button>
            <button onClick={completeTask}>Mark Complete</button>
        </div>
    )
}

export default Task;