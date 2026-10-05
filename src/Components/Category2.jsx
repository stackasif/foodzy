import { useContext, useState } from 'react'
import category from '../items/category.js'
import { dataContext } from '../context/UserContext.jsx'
import foodItems from '../items/foodItems.js'

function Category2() {
  const [activeCategory, setActiveCategory] = useState(category[0]?.id)

  let {filter}=useContext(dataContext)

  
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center py-5 md:py-8 scroll-mt-[100px]"  id='menu' data-aos="fade-up">
        <p className="text-[#e8281a] text-[20px]">
          What we offer
        </p>

        <h1 className="text-[42px] font-semibold">
          Our Delicious food
        </h1>

        <div className="w-16 h-1 bg-[#ed261c] rounded-full mt-5 mb-5" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4" data-aos="fade-up">
        {category.map((item) => (
          <div 
            key={item.id}
            onClick={() => { setActiveCategory(item.id); filter(item.name); }}
           
            className={`flex flex-col border-2 border-gray-800 justify-center items-center rounded-2xl m-1 px-3 py-1 cursor-pointer
              overflow-hidden shadow-lg transition-all duration-300 
              ${
                activeCategory === item.id
                  ? 'bg-[#e8281a] text-white border-red-500'
                  : 'bg-white text-black border-red-300 hover:border-red-300'
              }`}
          >
            <h1 className="font-semibold text-[14px] md:text-base">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category2