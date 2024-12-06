import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item'>
      {/* Corrected the Link to use backticks for template literals */}
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="items-prices">
        <div className="item-price-new">
        &#8377;{props.new_price}
        </div>
        <div className="item-price-old">
        &#8377;{props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Item;
