import React, { useEffect, useState } from 'react';
import DoneList from '../DoneList/DoneList';
import TodoLists from '../TodoLists/TodoLists';
import './List.css';

const List = () => {
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/todos')
      .then(res => res.json())
      .then(data => {
        setTodoList(data)
      })
  }, [])


  const handleClick = (item) => {
    setTodoList(todoList.filter((i) => i.id !== item.id));
    setDoneList([...doneList, item]);
  };

  return (
    <div className='todos'>

      <DoneList className="todo">
        <div className="todo_titles">                     <h3>To-do</h3>
          <p>Take a breath. <br /> Start doing.</p>
        </div>
        {
          todoList.map(todo =>
            <TodoLists id={todo.id} className="" draggeble="true">

              <div className="list">
                <input type="radio" name="" id="todo" />
                <label onClick={() => handleClick(todo)} htmlFor="todo">{todo.todo}</label>
              </div>
            </TodoLists>
          )
        }
      </DoneList>


      <DoneList className="todo_done">
        <h3>Done</h3>
        <p>Congratulations!</p>
                 <p>You have done 0 tasks</p>
        {
          doneList.map(todo => <TodoLists id="todo-2" className="" draggeble="true">
            <p>{todo.todo}</p>
          </TodoLists>)
        }
      </DoneList>
    </div>
  );
};

export default List;