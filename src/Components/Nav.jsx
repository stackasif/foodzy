import { useContext, useEffect, useState } from "react";

import { IoCloseSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { MdDinnerDining } from "react-icons/md";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { dataContext } from "../context/UserContext";
import foodItems from "../items/foodItems";
import CartSection from "./CartSection";
import { useSelector } from "react-redux";

const navItems = [
  "Home",
  "About",
  "Menu",
  "Chefs",
  "Reservation",
  "Reviews",
  "Contact",
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  let {input,setInput,setCate,showCart,setShowCart}=useContext(dataContext)
  
  useEffect(()=>{
   let newList= foodItems.filter((item)=>item.food_name.includes(input) || item.food_name.toLocaleLowerCase().includes(input))
   setCate(newList)
  },[input])

  const handleNavClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };
  let items=useSelector(state=>state.cart)
  // console.log(items)

  return (
    <>
      {/* ================= HEADER ================= */}
      <header data-aos="fade-down" className="sticky top-0 z-40 w-full border-b border-orange-100 bg-white/95 shadow-sm backdrop-blur-md" >
        <nav
          className="
            mx-auto flex
            h-[80px] md:h-[100px]
            max-w-[1280px]
            items-center justify-between
            gap-3
            px-3 md:px-5 lg:px-8
          "
        >
          {/* ================= LOGO ================= */}
          <div className="flex items-center gap-2 shrink-0">
            <div
              className="
                flex items-center justify-center
                w-9 h-9
                md:w-12 md:h-12
                rounded-full
                shadow-lg
                bg-gradient-to-br from-[#ED481C] to-[#F58A20]
                text-white
              "
            >
              <MdDinnerDining className="text-[16px] md:text-2xl cursor-pointer" />
            </div>

            <h1 className="text-[14px] md:text-[20px] cursor-pointer font-extrabold">
              Food<span className="text-red-600">ZY</span>
            </h1>
          </div>

          {/* ================= SEARCH ================= */}
          <form
            action=""
            className="
              flex items-center justify-between
              w-full
              max-w-[700px]
              h-[40px] md:h-[60px]
              gap-3
              px-2 md:px-5
              rounded-full
              border-2 border-orange-100
              bg-white
              shadow-[0_4px_20px_rgba(249,115,22,0.12)]
              transition-all
              focus-within:border-orange-300
              focus-within:shadow-[0_4px_25px_rgba(249,115,22,0.2)]
            "
            onSubmit={(e)=>e.preventDefault()}
          >
            <input
              type="text"
              placeholder="search items...."
              className="
                w-full
                outline-none
                text-[12px] md:text-[16px]
                bg-transparent
              "
              onChange={(e)=>setInput(e.target.value)}
              value={input}
            />

            <button
              type="submit"
              className="
                shrink-0
                w-6 h-6
                md:w-8 md:h-8
                rounded-full
                shadow-lg
                bg-gradient-to-br from-[#ED481C] to-[#F58A20]
                flex justify-center items-center
                text-white
              "
            >
              <FaSearch className="w-[10px] h-[10px] md:w-[12px] md:h-[12px]" />
            </button>
          </form>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-2 shrink-0" >
            {/* Cart */}
            <button

              type="button"
              className="
                relative
                w-9 h-9
                md:w-12 md:h-12
                cursor-pointer
                rounded-full
                shadow-lg
                bg-gradient-to-br from-[#ED481C] to-[#F58A20]
                flex justify-center items-center
                text-white
              "

              onClick={()=>setShowCart(true)}
            >
              <FaShoppingCart className="text-[16px] md:text-xl " />

              <span
                className="
                  absolute
                  -top-1 -right-1
                  min-w-[18px] h-[18px]
                  px-1
                  rounded-full
                  bg-red-600
                  text-white
                  text-[10px]
                  flex items-center justify-center
                  font-semibold
                "
              >
                {items.length}
              </span>
            </button>

            {/* ================= HAMBURGER ================= */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              className="
                cursor-pointer
                flex items-center justify-center
                w-9 h-9
                md:w-12 md:h-12
                rounded-full
                text-gray-800
                hover:bg-orange-50
                transition-all duration-300
              "
            >
              <LuMenu className="text-[26px] md:text-[32px]" />
            </button>
          </div>

          
        </nav>
       
      </header>
       <CartSection/>

      {/* =====================================================
                            OVERLAY
      ====================================================== */}

      <div
        onClick={() => setIsMenuOpen(false)}
        className={`
          fixed inset-0 z-[50]
          bg-black/20
          backdrop-blur-sm
          transition-all duration-300

          ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />

      {/* =====================================================
                         GLASS NAV MENU
      ====================================================== */}

      <aside
        className={`
          fixed
          z-[60]

          /* Desktop */
          top-6 right-6 bottom-6
          w-[420px]

          /* Mobile */
          max-sm:top-3
          max-sm:right-3
          max-sm:bottom-3
          max-sm:w-[calc(100%-24px)]

          rounded-[28px]

          /* Background */
          bg-[#fffaf4]/75

          /* Glass effect */
          backdrop-blur-2xl
          border border-white/80

          shadow-[0_25px_80px_rgba(0,0,0,0.18)]

          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-[110%] opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="relative flex h-full flex-col px-8 md:px-10 py-7 md:py-9">

          {/* ================= CLOSE ================= */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
              className="
                flex items-center justify-center
                w-11 h-11
                rounded-full
                text-gray-800
                hover:bg-black/5
                hover:rotate-90
                transition-all duration-300
              "
            >
              <IoCloseSharp className="text-[32px]" />
            </button>
          </div>

          {/* ================= NAV ITEMS ================= */}
          <nav
            className="
              flex flex-1
              flex-col
              items-center
              justify-center
              gap-6
              md:gap-7
            "
          >
            {navItems.map((item) => {
              const isActive = activeItem === item;

              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => handleNavClick(item)}
                  className={`
                    relative
                    text-[19px] md:text-[21px]
                    font-medium
                    transition-all duration-300

                    ${
                      isActive
                        ? "text-red-500"
                        : "text-gray-800 hover:text-red-500"
                    }
                  `}
                >
                  {item}

                  {/* Active underline */}
                  <span
                    className={`
                      absolute
                      left-1/2
                      -translate-x-1/2
                      -bottom-2

                      h-[2px]
                      rounded-full
                      bg-red-500

                      transition-all duration-300

                      ${
                        isActive
                          ? "w-10 opacity-100"
                          : "w-0 opacity-0"
                      }
                    `}
                  />
                </a>
              );
            })}
          </nav>

          {/* ================= FOOTER ================= */}
          <div className="pb-2 md:pb-3">
            <div className="w-full h-px bg-black/10 mb-5 md:mb-6" />

            <div
              className="
                flex
                justify-center
                items-center
                gap-5 md:gap-7
                text-xs md:text-sm
                text-gray-500
              "
            >
              <a
                href="#"
                className="hover:text-black transition-colors"
              >
                Instagram
              </a>

              <a
                href="#"
                className="hover:text-black transition-colors"
              >
                Facebook
              </a>

              <a
                href="#"
                className="hover:text-black transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}