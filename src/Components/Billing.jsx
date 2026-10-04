import React from 'react'
import { CiMoneyBill } from "react-icons/ci";
import { MdDeliveryDining } from "react-icons/md";
import { RiBillLine,RiMoneyRupeeCircleFill } from "react-icons/ri";
import { BsCurrencyRupee } from "react-icons/bs";

import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';




function Billing() {
    let data=useSelector((item)=>item.cart)

    let subtotal=data.reduce((total,items)=>total+items.qty*items.price,0)
    let delivery= 20;
    let tax=subtotal*18/100;
    let total=Math.floor(subtotal+delivery+tax);

    

  return (
    <div className='w-full h-[100px] md:h-[250px] bg-white shadow-lg p-2.5 rounded-lg my-2 items-center'>
        <h1 className='w-full font-bold text-[16px] py-2 border-b border-zinc-300'>
            Order Summary
        </h1>
        <div className=' flex flex-col gap-1.5'>
            <div className='flex items-center justify-between  mt-2 '>
                <div className='flex items-center gap-2'>
                    <CiMoneyBill className='w-[23px] h-[23px]  text-zinc-600'/>
                    <p className='text-[15px] text-zinc-600'>SubTotal</p>
                </div>
                <div className='text-[15px] font-semibold flex items-center'>
                    <BsCurrencyRupee />
                     {subtotal}/-
                </div>
              </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <MdDeliveryDining className='w-[23px] h-[23px]  text-zinc-600'/>
                    <p className='text-[15px] text-zinc-600'>Delivery fee</p>
                </div>
                <div className='text-[15px] font-semibold flex items-center'>
                    <BsCurrencyRupee className='w-[16px] h-[16px]' />
                    {delivery}/-
                </div>
            </div>
            <div className='flex items-center justify-between '>
                <div className='flex items-center gap-2'>
                    <RiBillLine className='w-[20px] h-[20px]  text-zinc-600'/>
                    <p className='text-[15px] text-zinc-600'>Tax (18%)</p>
                </div>
                <div className='text-[15px] font-semibold flex items-center'>
                    <BsCurrencyRupee className='w-[16px] h-[16px]' />
                     {tax}/-
                </div>
            </div>
            <div className='flex items-center justify-between border-t border-zinc-300 pt-2'>
                <div className='flex items-center gap-2'>
                    <RiMoneyRupeeCircleFill className='w-[23px] h-[23px]  text-zinc-600'/>
                    <p className='text-[18px] text-zinc-600 font-bold'>Total Amount</p>
                </div>
                <div className='text-[18px] text-red-700 font-bold flex items-center'>
                   <BsCurrencyRupee className='w-[16px] h-[16px]' /> {total}/-
                </div>
            </div>
            <div className='w-full  bg-red-600 font-semibold text-white shadow-lg hover:bg-red-700 rounded-lg cursor-pointer py-1.5 my-2' onClick={()=>toast.success("Order placed")}>
                            <h4 className='text-center'>
                                Place order
                            </h4>
                        </div>
        </div>
    </div>
  )
}

export default Billing