
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

  return (
    <div className='text-center m-4 p-4'>
        <h1 className='font-bold text-2xl'>Cart</h1>
        <div className='w-6/12 m-auto p-4'>
            <button className='p-2 m-2 text-white bg-black rounded-xl' onClick = {handleClearCart}>Clear Cart</button>
            <ItemList items={cartItems} />
            {cartItems.length === 0 && <h1>Your Cart is empty add some items to your Cart</h1>}
        </div>
    </div>
  )
}

export default Cart