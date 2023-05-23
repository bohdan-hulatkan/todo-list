import React, { useState } from 'react';

function Test() {
  const [value, setValue] = useState('');
  const [todosUnCheck, setTodosUnCheck] = useState([]);
  const [todosCheck, setTodosCheck] = useState([]);

  /*function change(event) {
    setValue(event.target.value);
  }

  function newChange() {
    setTodosUnCheck([...todosUnCheck, value]);
    setValue('');
  }*/

  function deleteTodo(index) {
    const newTodos = [...todosUnCheck];
    setTodosCheck([...todosCheck, (newTodos.splice(index, 1))]);
    setTodosUnCheck(newTodos);
  }

  function removeTodo(index) {
    const newTodos = [...todosCheck];
    setTodosUnCheck([...todosUnCheck, (newTodos.splice(index, 1))]);
    setTodosCheck(newTodos);
  }

  /*function deleteAll(index) {
    const newTodos = [...todosCheck];
    newTodos.splice(index, 1);
    setTodosCheck(newTodos);
  }*/

  return (
    <div>
      <input type='text' value={value} onChange={change} />
      <button onClick={newChange}>Button</button>
      <ul>
        <h3>Не виконані</h3>
        {todosUnCheck.map((item, index) => (
          <li key={index}>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            {item}
          </li>
        ))}
      </ul>
      <br />
      <ul>
        <h3>Виконані</h3>
        {todosCheck.map((item, index) => (
          <li key={index}>
            <button onClick={() => removeTodo(index)}>Delete</button>
            <button onClick={() => deleteAll(index)}>Remove</button>
            {item}
          </li>
        ))}
      </ul>
    </div >
  );
}

export default Test;