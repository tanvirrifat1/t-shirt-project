import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Shirt from '../tShirt/Shirt';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([])

    const handleAddToCart = tShirt => {
        const exist = cart.find(ts => ts._id === tShirt._id)
        if (exist) {
            alert('Already Exist')
        }
        else {
            const newCart = [...cart, tShirt];
            setCart(newCart)
        }
    }

    const handleRemoveItem = tShirt => {
        const remaining = cart.filter(ts => ts._id !== tShirt._id)
        setCart(remaining)
    }

    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
                {
                    tShirts.map(tShirt => <Shirt
                        key={tShirt._id}
                        handleAddToCart={handleAddToCart}
                        tShirt={tShirt}
                    ></Shirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;