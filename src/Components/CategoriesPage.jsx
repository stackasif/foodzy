import { useContext } from 'react'
import category from '../items/category.js'
import { dataContext } from '../context/UserContext.jsx'


function CategoriesPage() {
    
  return (
    <div>
      <div className='flex flex-col justify-center items-center text-center py-10' >
        <p className='text-[#e8281a] text-[20px]'>
            What we offer
        </p>
        <h1 className='text-[42px] font-semibold'>
          Browse by <span className='text-[#e8281a]'>Category</span> 
        </h1>
        <div className="w-16 h-1 bg-[#ed261c] rounded-full mt-5 mb-5" />
        <p className='text-gray-600 text-[16px]'>
            From sizzling burgers to exotic world cuisines - find your <br /> favourite in our menu
        </p>
      </div>


      <div className=" bg-[#fffaf4] flex flex-wrap items-center justify-center gap-3 md:gap-4 px-2 md:px-6 py-4 md:py-8" onClick={() => {
  document.getElementById('menu').scrollIntoView({
    behavior: 'smooth'
  })
}}>
        {category.map((item, index) => (
          <div
            
            key={item.id}
            className={`py-4 flex flex-col justify-center items-center rounded-2xl bg-white
              w-25 h-25 md:w-48 md:h-48 overflow-hidden cursor-pointer
              shadow-lg transition-all duration-200
              border-2
              ${index === 0
                ? 'border-red-500'
                : 'border-transparent hover:border-red-300'
              }`}
          >
            <div className="w-12 h-12 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0">
              <img
                src={item.images}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="font-semibold mt-1 md:mt-3 text-[12px] md:text-base" >
              {item.name}
            </h1>

            <p className="text-gray-400 text-[9px] md:text-sm md:mt-1" >
              {item.items} Items
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoriesPage