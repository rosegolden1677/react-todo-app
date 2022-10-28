import React, { useState } from 'react';
import './List.css';
import { AiOutlinePlus } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";

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
              <div className='left'>
                <input type="checkbox" />
                <p>{name}</p>
              </div>

              <div className='right'>
                <button>
                  edit
                </button>
                <button>
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