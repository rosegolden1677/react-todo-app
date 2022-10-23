import React from 'react';
import './List.css';
import { AiOutlinePlus } from "react-icons/ai";

const List = () => {
  return (
    <div className='add-todo'>
      <AiOutlinePlus className='plus-icon' />
      <input type="text" placeholder='add to-do' />
    </div>
  );
}

export default List;