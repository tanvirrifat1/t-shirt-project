import React from 'react';
import './Shirt.css'

const Shirt = ({ tShirt, handleAddToCart }) => {
    const { gender, name, id, picture, price } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <button onClick={() => handleAddToCart(tShirt)}>Buy This</button>
        </div>
    );
};

export default Shirt;