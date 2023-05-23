import React, { useState } from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";
import './style/main-content/add-todo-form.css';

function AddTodoForm(props) {
  const [todoText, setTodoText] = useState('');
  const [todoPriority, setTodoPriority] = useState(1);

  function addTodo() {
    if (todoText !== '') {
      props.addTodo(todoText, todoPriority);
      setTodoText('');
      setTodoPriority(1);
    }
  }

  return (
    <div className='add-todo-form'>
      <input className='input-add-todo-form' type='text' placeholder='Введіть текст завдання' value={todoText} onChange={(event) => setTodoText(event.target.value)}></input>
      <div>
        <select className='select-add-todo-form' value={todoPriority} onChange={(event) => setTodoPriority(event.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      <AiOutlinePlusCircle className='button-add-todo-form' onClick={addTodo}></AiOutlinePlusCircle>
    </div>
  );
}

export default AddTodoForm;