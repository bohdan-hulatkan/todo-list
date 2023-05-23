import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Home from './Home';
import AddCategoryForm from './AddСategoryForm';
import EditCategoryForm from './EditCategoryForm';
import AddTodoForm from './AddTodoForm';
import EditTodoForm from './EditTodoForm';
import { AiOutlineHome, AiOutlineCheckCircle, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import './style/sidebar/sidebar.css';
import './style/sidebar/home.css';
import './style/sidebar/category-list.css';
import './style/main-content/main-content.css';
import './style/main-content/name.css';
import './style/main-content/todo-list.css';

function TodoList() {
  const [categories, setCategories] = useState([]);
  const [categorySelectIndex, setCategorySelectIndex] = useState(null);
  const [itemCategoryName, setItemCategoryName] = useState("");
  const [itemCategorySelectIndex, setItemCategorySelectIndex] = useState(null);
  const [open, setOpen] = useState(false);

  function addCategory(categoryName) {
    setCategories([...categories, {
      categoryName: categoryName,
      categoryContent: [{
        todoText: 'Hello',
        todoPriority: 1,
        todoEditState: false
      }],
      categoryEditState: false
    }]);
  }
  
  function deleteCategoryOnClick(index) {
    setOpen(true);
    setItemCategoryName(categories[index].categoryName);
    setItemCategorySelectIndex(index);
  }

  function deleteCategory(index) {
    setCategorySelectIndex(null);
    const temporary = [...categories];
    temporary.splice(index, 1);
    setCategories(temporary);
    setOpen(false);
  }

  function toggleEditCategory(index) {
    const temporary = [...categories];
    temporary[index].categoryEditState = !temporary[index].categoryEditState;
    setCategories(temporary);
  }

  function saveCategoryChanges(editCategoryName, index) {
    const temporary = [...categories];
    temporary[index].categoryName = editCategoryName;
    temporary[index].categoryEditState = false;
    setCategories(temporary);
  }

  function onSelect(index) {
    setCategorySelectIndex(index);
  }

  function addTodo(todoText, todoPriority) {
    const temporary = [...categories];

    temporary[categorySelectIndex].categoryContent.push({
      todoText: todoText,
      todoPriority: todoPriority
    });

    setCategories(temporary);
  }

  function deleteTodo(index) {
    const temporary = [...categories];
    temporary[categorySelectIndex].categoryContent.splice(index, 1);
    setCategories(temporary);
  }

  function toggleEditTodo(index) {
    const temporary = [...categories];
    temporary[categorySelectIndex].categoryContent[index].todoEditState = !temporary[categorySelectIndex].categoryContent[index].todoEditState;
    setCategories(temporary);
  }

  function saveTodoChanges(editTodoText, editTodoPriority, index) {
    const temporary = [...categories];
    temporary[categorySelectIndex].categoryContent[index].todoText = editTodoText;
    temporary[categorySelectIndex].categoryContent[index].todoPriority = editTodoPriority;
    temporary[categorySelectIndex].categoryContent[index].todoEditState = false;
    setCategories(temporary);
  }

  return (
    <div className='window'>
      <div className='sidebar'>
        <div className='home' onClick={() => setCategorySelectIndex(null)}>
          <AiOutlineHome className='icon-home' ></AiOutlineHome>
          <label className='label-home' >ГОЛОВНА</label>
        </div>
        <AddCategoryForm addCategory={addCategory}></AddCategoryForm>
        <div className='category-list'>
          {categories.map((item, index) => (
            <li className='category' key={index}>
              <div className='category-title'>
                <AiOutlineDelete className='delete-category-button' onClick={() => deleteCategoryOnClick(index)}></AiOutlineDelete>
                <AiOutlineEdit className='edit-category-button' onClick={() => toggleEditCategory(index)}></AiOutlineEdit>
                <label className='category-name' onClick={() => onSelect(index)}>{item.categoryName}</label>
              </div>
              {item.categoryEditState && <EditCategoryForm saveCategoryChanges={saveCategoryChanges} category={item} index={index}></EditCategoryForm>}
            </li>
          ))}
        </div>
      </div>

      <div className='main-content'>
        <div className='content'>
          {categorySelectIndex !== null && <label className='name'>{categories[categorySelectIndex].categoryName}</label>}
          {categorySelectIndex !== null && <AddTodoForm addTodo={addTodo}></AddTodoForm>}
          {categorySelectIndex === null ? <Home></Home> :
            <div className='todo-list'>
              {categorySelectIndex !== null && categories[categorySelectIndex].categoryContent.map((item, index) => (
                <li className='todo' key={index}>
                  <div className='todo-title'>
                    <AiOutlineCheckCircle className='delete-todo-button' onClick={() => deleteTodo(index)}></AiOutlineCheckCircle>
                    <AiOutlineEdit className='edit-todo-button' onClick={() => toggleEditTodo(index)}></AiOutlineEdit>
                    <label className='todo-priority'>{item.todoPriority}</label>
                    <label className='todo-text'>{item.todoText}</label>
                  </div>
                  {item.todoEditState && <EditTodoForm saveTodoChanges={saveTodoChanges} todo={item} index={index}></EditTodoForm>}
                </li>
              ))}
            </div>
          }
        </div>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle className="alert-dialog-title">
          Ви дійсно хочете видалити категорію "{itemCategoryName}" ?
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Ні</Button>
          <Button onClick={() => deleteCategory(itemCategorySelectIndex)} autoFocus>
            Так
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}

export default TodoList;