import React, { useState } from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";
import './style/sidebar/add-category-form.css'

function AddCategoryForm(props) {
  const [categoryName, setCategoryName] = useState('');

  function addCategory() {
    if (categoryName !== '') {
      props.addCategory(categoryName);
      setCategoryName('');
    }
  }

  return (
    <div className='add-category-form'>
      <input className='input-add-category-form' type='text' placeholder='Введіть назву каткгорії' value={categoryName} onChange={(event) => setCategoryName(event.target.value)}></input>
      <AiOutlinePlusCircle className='button-add-category-form' onClick={addCategory}></AiOutlinePlusCircle>
    </div>
  );
}

export default AddCategoryForm;