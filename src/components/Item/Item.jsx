import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
  const { id,name, logo, total } = item;
  return (
    <div>
      <div className='card card-compact w-full bg-base-100 shadow-xl mt-4 p-4'>
        <figure>
          <img src={logo} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{name}</h2>
          <p>{total}</p>
          <div className='card-actions justify-end'>
            <Link to={`item/${id}`}><button className='btn btn-primary'>Continue</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
