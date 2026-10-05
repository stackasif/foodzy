import React, { useContext } from 'react'
import { RxCross2 } from "react-icons/rx"
import { dataContext } from '../context/UserContext'
import CardCart from './CardCart'
import Billing from './Billing'
import { useSelector } from 'react-redux'

function CartSection() {

  const { showCart, setShowCart } = useContext(dataContext)
  let item=useSelector(state=>state.cart)

  return (
    <div
      className={`fixed inset-0 z-50 transition-all  ${showCart? "opacity-100 pointer-events-auto": "opacity-0 pointer-events-none"}`}
      onClick={() => setShowCart(false)}
    >

     
      <div className={`w-full md:w-[40vw] md:w-[35vw] overflow-auto h-full bg-[#fffaf4]/75 backdrop-blur-2xl border border-white/80 fixed top-0 right-0
        transition-transform duration-500 ease-in-out p-5
        ${showCart ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}>

        <div className="flex justify-between items-center px-3">

          <p className="text-[14px] md:text-[18px] font-semibold">
            Order items
          </p>

          <RxCross2
            className="w-6 h-6 cursor-pointer"
            onClick={() => setShowCart(false)}
          />

        </div>


        {/* CardCart section  */}
        {item.length >0?<CardCart/>:
        <div className='w-full h-screen flex justify-center items-center'  >
          <h1 className='text-[12px]'>
            Empty Cart
          </h1>
        </div>
        }
        
        
      </div>
      

    </div>
  )
}

export default CartSection