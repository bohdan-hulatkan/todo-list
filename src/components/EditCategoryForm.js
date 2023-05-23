import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import './style/sidebar/edit-category-form.css';

function EditCategoryForm(props) {
  const [editCategoryName, setEditCategoryName] = useState(props.category.categoryName);

  function saveCategoryChanges() {
    if (editCategoryName !== '') {
      props.saveCategoryChanges(editCategoryName, props.index);
      setEditCategoryName('');
    }
  }

  return (
    <div className='edit-category-form'>
      <input className='input-edit-category-form' type='text' value={editCategoryName} onChange={(event) => setEditCategoryName(event.target.value)}></input>
      <AiOutlineCheck className='button-edit-category-form' onClick={saveCategoryChanges}></AiOutlineCheck>
    </div>
  );
}

export default EditCategoryForm;