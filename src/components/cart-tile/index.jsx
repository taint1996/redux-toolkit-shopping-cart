import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/slices/cart-slice'

const CartTile = ({ cartItem }) => {
    const dispatch = useDispatch()

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(cartItem.id))
    }

    return (
        <>
            <div className='flex items-center p-5 justify-between border-gray-500 border mt-2 mb-2 rounded-xl'>
                <div className='flex p-3'>
                    <img src={cartItem?.image} className='h-28 rounded-lg' alt={cartItem?.title} />
                    <div className='ml-10 self-start space-y-5'>
                        <h1 className='text-xl text-blue-400 font-bold'>{cartItem?.title}</h1>
                        <p className='text-green-500 font-extrabold'>{cartItem?.price}</p>
                    </div>
                    <div className='flex items-center justify-center w-full mt-5'>
                        <button className='bg-red-950 text-white border-2 rounded-lg font-bold p-4 capitalize' onClick={handleRemoveFromCart}>
                            Remove from cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartTile