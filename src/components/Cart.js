
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = (items) => {
        dispatch(clearCart(items))
    }

  return (
    <div className='text-center m-4 p-4'>
        <h1 className='font-bold text-2xl'>Cart</h1>
        <div className='w-6/12 m-auto p-4'>
            <button className='' onClick = { () => handleClearCart(items)}>Clear Cart</button>
            <ItemList items={cartItems} />
        </div>
    </div>
  )
}

export default Cart