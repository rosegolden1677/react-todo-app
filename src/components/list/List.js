import React, { useState } from 'react';
import './List.css';
import { AiOutlinePlus } from "react-icons/ai";

const List = () => {

  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [...list,{id: new Date().getTime.toString, name: name}];
    setList(newList)
    setName('');
  }

  return (
    <div className='add-todo'>
      <form onSubmit={handleSubmit}>
        <button type='submit'>
          <AiOutlinePlus className='plus-icon' />
        </button>
        <input type="text" placeholder='add to-do' value={name} onChange={(e) =>setName(e.target.value)} />
      </form>

      {
        list.map((item) => {

          const {id, name} = item;

          return (
            <div className='list-item' key={id}>
              <input type="checkbox" />
              <p>{name}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default List;