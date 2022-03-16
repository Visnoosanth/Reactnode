import React from 'react';
//import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className='posts-list'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className='posts-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'></div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
