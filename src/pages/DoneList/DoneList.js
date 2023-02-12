import React from 'react';

const DoneList = (props) => {

    const drop = e => {
        e.preventDefault();
        const todo_id = e.dataTransfer.getData('todo_id')

        const todo = document.getElementById(todo_id)
        todo.style.display = 'block';

        e.target.appendChild(todo)
    }

    const dragOver = e => {
        e.preventDefault()

    }

    return (
        <div
            id={props.id}
            onDrop={drop}
            onDragOver={dragOver}
            className={props.className}
        >
            {props.children}
        </div>
    );
};

export default DoneList;