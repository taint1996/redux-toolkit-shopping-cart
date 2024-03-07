import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartTile from '../components/cart-tile'
const Cart = () => {
  const [totalCart, setTotalCart] = useState(0)
  const { cart } = useSelector(state => state)

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])

  return (
    <div className='flex justify-center'>
      {cart && cart.length > 0 ? <>
        <div className='min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto'>
          <div className='flex flex-col justify-center items-center p-3 overflow-auto h-[98%]'>
            {cart.map(cartItem => {
              return <CartTile cartItem={cartItem} key={cartItem.id} />
            })}
          </div>
          <div className='flex items-center justify-end'>
            <div className='flex flex-col justify-center p-5 space-y-5 mt-14'>
              <h1 className='font-bold text-lg text-red-800 uppercase text-left'>Your cart summary</h1>
              <p>
                <span className='text-gray-800 font-bold'>
                  Total Item: {cart.length}
                </span>
              </p>
              <p>
                <span className='text-gray-800 font-bold'>
                  Total amount: <span className='text-2xl text-red-500'>{totalCart.toFixed(2)}$</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </> : <div className='min-h-[80vh] flex flex-col items-center justify-center'>
        <h1 className='text-gray-800 font-bold text-xl mb-2'>Your cart is empty</h1>
        <Link to={'/'}>
          <button className='bg-red-950 text-white border-2 rounded-lg font-bold p-4 uppercase'>Shopping Now</button>
        </Link>
      </div>}
    </div>
  )
}

export default Cart