import React, { useState } from 'react';
import './List.css';
import { AiOutlinePlus } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";

const List = () => {

  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {id: Date.now(), name: name};
    setList([...list, newItem])
    setName('');
  }

  // remove item from list
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  return (
    <div className='add-todo'>
      <form onSubmit={handleSubmit}>
        <button type='submit'>
          <AiOutlinePlus className='plus-icon' />
        </button>
        <input type="text" placeholder='add to-do' value={name} onChange={(e) => setName(e.target.value)} />
      </form>

      {
        list.map((item) => {

          const {id, name} = item;

          return (
            <div className='list-item' key={id}>
              <div className='left'>
                <input type="checkbox" />
                <p>{name}</p>
              </div>

              <div className='right'>
                <button>
                  edit
                </button>
                <button onClick={() => removeItem(id)}>
                  <IoTrashOutline className='trash-icon' />
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default List;