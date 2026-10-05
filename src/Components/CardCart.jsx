import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

 import image from '../assets/pizza.webp'
import { useDispatch, useSelector } from 'react-redux';
import { DecItems, IncItems, RemoveItem } from '../redux/cartSlice';
import Billing from './Billing';
import { toast } from 'react-toastify';

function CardCart() {
    let data=useSelector(state=>state.cart)
    // console.log(data);
    let dispatch=useDispatch()
   
    
  return (
    <div className='w-full'>

        {data.map(((item)=>(
            <div className='w-full h-[100px] md:h-[120px]  bg-white shadow-lg p-2.5 rounded-lg my-3 flex items-center' key={item.id}>
                <div className='w-[70%] h-full flex '>
                    <div className='w-[60%] h-full  overflow-hidden rounded-lg'>
                        <img src={item.image} alt="" className='object-cover'/>
                    </div>
                    <div className='w-[40%] text-[13px] md:text-[18px] text-center h-full flex flex-col justify-center  items-center font-medium gap-2'>
                        <p>{item.name}</p>

                        <div className="w-[70%] h-[30px] flex rounded-md overflow-hidden border border-red-200 shadow-lg">

                            <button className="w-[30%] h-full flex items-center justify-center bg-white text-2xl cursor-pointer" onClick={()=>item.qty >1?dispatch(DecItems(item.id)):1}>
                                -
                            </button>

                            <span className="w-[40%] h-full flex items-center justify-center bg-orange-100 text-[12px] md:text-sm">
                                {item.qty}
                            </span>

                            <button className="w-[30%] h-full flex items-center justify-center bg-white text-xl cursor-pointer " onClick={()=>dispatch(IncItems(item.id))}>
                                +
                            </button>

                        </div>
                    </div>
                </div>
                <div className='w-[30%] flex flex-col justify-start items-end gap-3'>
                    <p className='font-semibold'>Rs  {item.price}/-</p>
                    <RiDeleteBinLine className='text-red-600 text-[20px] cursor-pointer' onClick={()=>{dispatch(RemoveItem(item.id)); toast.error("item removed")}}/>
                </div>
            </div>
        )))}

        {/* biling secton  */}

        <Billing/>

    </div>
  )
        
}

export default CardCart