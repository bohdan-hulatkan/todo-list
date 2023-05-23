import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import './style/main-content/edit-todo-form.css';

function EditTodoForm(props) {
  const [editTodoText, setEditTodoText] = useState(props.todo.todoText);
  const [editTodoPriority, setEditTodoPriority] = useState(props.todo.todoPriority);

  function saveTodoChanges() {
    if (editTodoText !== '') {
      props.saveTodoChanges(editTodoText, editTodoPriority, props.index);
      setEditTodoText('');
      setEditTodoPriority('1')
    }
  }

  return (
    <div className='edit-todo-form'>
      <input className='input-edit-todo-form' type='text' value={editTodoText} onChange={(event) => setEditTodoText(event.target.value)}></input>
      <div>
        <select className='select-edit-todo-form' value={editTodoPriority} onChange={(event) => setEditTodoPriority(event.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      <AiOutlineCheck className='button-edit-todo-form' onClick={saveTodoChanges}></AiOutlineCheck>
    </div>
  );
}

export default EditTodoForm;