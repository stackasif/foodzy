import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa6";
import { GiChickenOven } from "react-icons/gi";
import { MdCurrencyRupee } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { Additems } from '../redux/cartSlice';
import { toast } from 'react-toastify';




const Menu = ({name,
id,
image,
category,
type,
description,
price}) => {
    let dispatch=useDispatch()

  return (
   
        <div className='w-[300px] h-[400px] bg-orange-100 p-3 rounded-lg cursor-default' data-aos="zoom-in">
            
            <div className='w-full h-[50%] overflow-hidden rounded-lg'>
                 {<img src={image} alt="" className='object-cover' />}
             </div>
            <h2 className='text-red-600 font-bold text-[14px]'> 
                {category}
            </h2>
            <h3 className='text-[18px] font-semibold text-gray-800'>
                {name}
            </h3>
            <p className='text-[12px] font-semibold text-gray-500'>
                {description}
            </p>
            <div className='flex justify-between items-center mt-5'>
                <div>
                    <p className='text-red-600 text-xl flex'>
                    <MdCurrencyRupee/><span className='text-[14px] font-semibold '>{price}/-</span>
                    </p>
                    {/* <p className='flex items-center gap-1 text-amber-500 '>
                    <FaStar className='text-[14px]' /> <span className='text-neutral-500 font-semibold text-[12px]'>(40)</span>
                    </p> */}
                </div>
                <p className='flex  justify-center items-center gap-1 bg-white p-1 rounded-md '>
                   {type==="Veg"?<FaLeaf className='text-emerald-600' size={16}/>:<GiChickenOven className='text-red-600' size={16}/>}
                    <span className=" font-bold text-mist-600 flex items-center justify-center text-[13px]  leading-none ">
                    {type}
                    </span>
                </p>
            </div>
            <div className='w-full  bg-red-600 font-semibold text-white shadow-lg hover:bg-red-700 rounded-lg cursor-pointer py-1.5 my-2'
            onClick={()=>{dispatch(Additems({id,name,image,price,qty:1}));
          toast.success("Item added")
        }}
            >
                <h4 className='text-center'>
                    Add to dish
                </h4>
            </div>
        </div>
    
  )
}

export default Menu