// import React, { useEffect, useState } from 'react';
// import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './TodoLists.css';

// const TodoLists = () => {
//     const [todoList, setTodoList] = useState([]);
//     const [doneList, setDoneList] = useState([]);
//     const [updatedTodos, setUpdatedTodos] = useState([])

//     useEffect(() => {
//         fetch('http://localhost:5000/todos')
//             .then(res => res.json())
//             .then(data => {
//                 setTodoList(data)

//                 if (todoList?.length) {
//                     setUpdatedTodos(data)
//                 }
//             })
//     }, [todoList?.length])


//     const handleClick = (item) => {
//         setTodoList(todoList.filter((i) => i.id !== item.id));
//         setDoneList([...doneList, item]);
//     };

//     function handleOnDragEnd(result) {
//         const items = Array.from(updatedTodos)
//         const [reorderdItem] = items.splice(result.source.index, 1)
//         items.splice(result.destination.index, 0, reorderdItem)

//         setUpdatedTodos(items)
//     }


//     return (
//         <div id='todo_container'>
//             <div className="todo_card">
//                 <div className="todo_titles">
//                     <h3>To-do</h3>
//                     <p>Take a breath. <br /> Start doing.</p>
//                 </div>
//                 <DragDropContext onDragEnd={handleOnDragEnd}>
//                     <Droppable droppableId="todo">
//                         {
//                             (provided) => {
//                                 return (<div className="todos" {...provided.droppableProps} ref={provided.innerRef}>
//                                     {updatedTodos && updatedTodos.map((item, index) => (
//                                         <Draggable key={index} draggableId={item.id} index={index}>
//                                             {
//                                                 (provided) => {
//                                                     return (
//                                                         <p ref={provided.innerRef}
//                                                             {...provided.draggableProps}
//                                                             {...provided.dragHandleProps} onClick={() => handleClick(item)}>
//                                                             {item.todo}
//                                                         </p>
//                                                     )
//                                                 }
//                                             }
//                                         </Draggable>
//                                     ))}
//                                     {provided.placeholder}
//                                 </div>)
//                             }
//                         }
//                     </Droppable>
//                 </DragDropContext>
//                 <button className="earse_btn">Earse all</button>
//             </div>
//             <div className="todo_done_card">
//                 <h3>Done</h3>
//                 <p>Congratulations!</p>
//                 <p>You have done 0 tasks</p>

//                 <ul className="done_todos">
//                     {doneList.map((item, index) => (
//                         <li key={index}>{item.todo}</li>
//                     ))}
//                 </ul>

//                 <button className="earse_btn">Earse all</button>
//             </div>
//         </div>
//     );
// };

// export default TodoLists;


import React from 'react';

const TodoLists = (props) => {

    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('todo_id', target.id)

        setTimeout(() => {
            target.style.display = "none"
        }, 0)
    }

    const dragOver = e => {
        e.stopPropagation()
    }

    return (
        <div
            id={props.id}
            onDragStart={dragStart}
            onDragOver={dragOver}
            draggable="true"
            className={props.className}
        >
            {props.children}
        </div>
    );
};

export default TodoLists;