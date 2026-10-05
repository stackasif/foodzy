import { IoIosStar, IoMdPlayCircle,IoIosTimer   } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { FaGripfire } from "react-icons/fa";




function Hero() {
  return (
    <section className="min-h-screen bg-[#fffaf4] px-6 py-10 scroll-mt-[100px]" id="home">

      {/* Main container */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row">

        {/* ================= LEFT SIDE ================= */}
        <div className="w-full lg:w-1/2" data-aos="fade-up">

          {/* Small badge */}
          <div className="mb-6 flex items-center gap-1.5 rounded-full bg-white px-4 py-3 shadow-md w-[320px] md:w-[360px] text-[14px] md:text-[16px]">
            <IoIosStar className="text-amber-500 text-[16px]"/>#1 Rated Fast Food Restaurant in New York
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl font-bold leading-tight text-gray-900 sm:text-6xl lg:text-7xl">

            Delicious

            <br />

            <span className="text-red-600">
              Fast Food
            </span>

            <br />

            for Every

            <br />

            Moment

          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-7 text-gray-600">
            Experience bold flavors crafted from premium ingredients.
            From crispy burgers to gourmet pizzas - every bite is an
            adventure worth savoring.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center gap-6">

            {/* Red button */}
            <button className="rounded-full flex items-center gap-1.5 bg-red-600 px-7 py-4 font-semibold text-white shadow-lg hover:bg-red-700">
              <ImSpoonKnife/>  Explore Menu
            </button>

            {/* Story button */}
            <button className="flex items-center gap-3 font-semibold text-gray-900">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                <IoMdPlayCircle className="text-[25px]"/>
              </span>

              Watch Our Story
            </button>

          </div>

          {/* Statistics */}
          <div className="mt-10 flex flex-wrap gap-6">

            <div>
              <h3 className="text-2xl font-bold">
                850<span className="text-red-600">+</span>
              </h3>
              <p className="text-xs text-gray-400">
                HAPPY CUSTOMERS
              </p>
            </div>

            <div className="border-l pl-6">
              <h3 className="text-2xl font-bold">
                120<span className="text-red-600">+</span>
              </h3>
              <p className="text-xs text-gray-400">
                MENU ITEMS
              </p>
            </div>

            <div className="border-l pl-6">
              <h3 className="text-2xl font-bold">
                15<span className="text-red-600">+</span>
              </h3>
              <p className="text-xs text-gray-400">
                EXPERT CHEFS
              </p>
            </div>

            <div className="border-l pl-6">
              <h3 className="text-2xl font-bold">
                12<span className="text-red-600">+</span>
              </h3>
              <p className="text-xs text-gray-400">
                YEARS EXPERIENCE
              </p>
            </div>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="relative flex w-full items-center justify-center lg:w-1/2" data-aos="fade-up">

          {/* Light circle behind burger */}
          <div className="absolute h-80 w-80 rounded-full bg-orange-100 sm:h-96 sm:w-96 lg:h-[450px] lg:w-[450px]">
          </div>

          {/* Burger image */}
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-[15px] border-orange-200 sm:h-96 sm:w-96 lg:h-[430px] lg:w-[430px]">

            <img
              src="/hero-burger.png"
              alt="Burger"
              className="h-full w-full object-cover"
            />

          </div>


          {/* Hot Deal */}
          <div className="absolute flex items-center gap-2.5 left-0 top-10 rounded-xl bg-white px-5 py-4 shadow-lg">
            <FaGripfire className="text-[25px] text-red-500" />
            <div>
              <p className="font-bold">
               Hot Deal
            </p>

            <p className="text-xs text-gray-400">
              30% off today
            </p>
            </div>
          </div>


          {/* Delivery */}
          <div className="absolute flex items-center gap-2  right-0 top-1/2.5 rounded-xl bg-white px-5 py-4 shadow-lg ">
          <IoIosTimer className="text-[20px] text-blue-500 "/>
            <div>
              <p className="font-bold">
                20 min
            </p>

            <p className="text-xs text-gray-400">
              Fast delivery
            </p>
            </div>
          </div>


          {/* Rating */}
          <div className="absolute bottom-0 right-5 flex items-center gap-2.5 rounded-xl bg-white px-5 py-4 shadow-lg">
            <IoIosStar className="text-[20px] text-yellow-500" />
           <div>
             <p className="font-bold">
               4.9/5
            </p>

            <p className="text-xs text-gray-400">
              2k+ reviews
            </p>
           </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;