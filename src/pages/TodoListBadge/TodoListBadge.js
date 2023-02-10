import React from 'react';
import './TodoListBadge.css';

const TodoListBadge = () => {
    return (
        <div id="badge_container">
            <div>
                <div className="todo_title">
                    To-do List
                </div>
                <p className="todo_subtitle">
                    Drag and drop to set your main priorities, check <br /> when done and create what´s new.
                </p>
            </div>
        </div>
    );
};

export default TodoListBadge;