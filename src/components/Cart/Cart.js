import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {

    let msg;
    if (cart.length === 0) {
        msg = <p>Please Buy at least one item!!</p>
    }
    else if (cart.length === 1) {
        msg = <div>
            <h4>Get one for me</h4>
            <p>Get one for yourself</p>
        </div>
    }
    else {
        msg = <p>Thanks for buying!!</p>
    }

    return (
        <div className='cart'>
            <h1 className={cart.length === 2 ? `orange` : `purple`}>Orders summary </h1>
            <p className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Orders Quantity: {cart.length}</p>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                msg
            }
            {cart.length === 3 ? <p>3 jon k gift krba</p> : <p>ok Buy this</p>}
            <p>&& operator</p>
            {cart.length === 2 && <h3>Double Items</h3>}
            <p> || operator</p>
            {cart.length === 4 || <h5>Not for four items</h5>}
        </div>
    );
};

export default Cart;



/*
Condition Rendering
1. use element in a variable and then use if-else to set value
2. ternary operator condition ? true: false
3. && operator
4. || operator
*/