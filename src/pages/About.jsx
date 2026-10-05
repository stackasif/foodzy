import { FaLeaf } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaBookOpen } from "react-icons/fa";



function About() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white scroll-mt-[60px]" id="about">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 xl:gap-16 items-center"  >

          {/* ================= IMAGE SECTION ================= */}
          <div className="relative w-full max-w-[600px] mx-auto lg:mx-0 shadow-2xl" data-aos="zoom-in">

            {/* Main Image */}
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src="./restaurant.webp"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="
              absolute
              top-8 left-[-10px]
              sm:top-10 sm:left-[-15px]
              lg:top-8 lg:left-[-18px]
              w-[115px] h-[135px]
              sm:w-[125px] sm:h-[145px]
              bg-[#ed261c]
              rounded-2xl
              flex flex-col items-center justify-center
              text-white
              shadow-xl
            ">
              <h2 className="text-3xl sm:text-4xl font-serif">
                12+
              </h2>

              <p className="text-sm sm:text-base mt-1">
                Years of
              </p>

              <p className="text-sm sm:text-base">
                Excellence
              </p>
            </div>

            {/* Small Image */}
            <div className="
              absolute
              right-[-5px] bottom-[-25px]
              sm:right-0 sm:bottom-[-30px]
              lg:right-[-20px] lg:bottom-[-30px]
              w-[150px] h-[150px]
              sm:w-[180px] sm:h-[180px]
              lg:w-[190px] lg:h-[190px]
              rounded-2xl
              overflow-hidden
              border-4 border-white
              shadow-xl
            ">
              <img
                src="./rest.webp"
                alt="Restaurant food"
                className="w-full h-full object-cover"
              />
            </div>

          </div>


          {/* ================= CONTENT SECTION ================= */}
          <div className="pt-8 lg:pt-0" data-aos="zoom-in">

            <p className="
              text-[#ed261c]
              text-lg sm:text-xl
              italic
              mb-2
            ">
              Our Story
            </p>

            <h2 className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              xl:text-[52px]
              leading-[1.1]
              font-bold
              font-serif
              text-gray-900
            ">
              We Invite You to Visit
              <br className="hidden sm:block" />
              Our <span className="text-[#ed261c]">Food Restaurant</span>
            </h2>

            {/* Orange line */}
            <div className="w-16 h-1 bg-[#ed261c] rounded-full mt-5 mb-5" />

            <p className="
              text-gray-500
              text-base
              sm:text-lg
              leading-7
              max-w-2xl
            ">
              Founded in 2012, Sarab began as a small corner joint with a big
              dream - to serve food that brings people together. Today we're
              proud to serve thousands of happy customers every week with the
              same passion that started it all.
            </p>


            {/* ================= FEATURES ================= */}
            <div className="mt-7 space-y-4">

              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="
                  shrink-0
                  w-12 h-12
                  rounded-xl
                  bg-[#ffe0bd]
                  flex items-center justify-center
                  text-[#ed261c]
                ">
                  <FaLeaf />
                </div>

                <div>
                  <h3 className="font-bold text-base sm:text-lg">
                    100% Fresh Ingredients
                  </h3>

                  <p className="text-gray-500 text-sm sm:text-base leading-6">
                    We source locally and sustainably. Every ingredient is
                    hand-picked daily for maximum freshness.
                  </p>
                </div>
              </div>


              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="
                  shrink-0
                  w-12 h-12
                  rounded-xl
                  bg-[#ffed9c]
                  flex items-center justify-center
                  text-orange-500
                ">
                  <FaAward />
                </div>

                <div>
                  <h3 className="font-bold text-base sm:text-lg">
                    Award-Winning Recipes
                  </h3>

                  <p className="text-gray-500 text-sm sm:text-base leading-6">
                    Our signature recipes have won national culinary awards
                    5 years in a row.
                  </p>
                </div>
              </div>


              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <div className="
                  shrink-0
                  w-12 h-12
                  rounded-xl
                  bg-green-50
                  flex items-center justify-center
                  text-green-600
                ">
                  <TbTruckDelivery />
                </div>

                <div>
                  <h3 className="font-bold text-base sm:text-lg">
                    Lightning-Fast Delivery
                  </h3>

                  <p className="text-gray-500 text-sm sm:text-base leading-6">
                    Order online and get hot, fresh food at your door in under
                    25 minutes, guaranteed.
                  </p>
                </div>
              </div>

            </div>


            {/* ================= BUTTON ================= */}
            <button className="
              mt-8
              bg-[#ed261c]
              hover:bg-[#d91f16]
              text-white
              font-semibold
              px-7
              py-3.5
              rounded-full
              shadow-xl
              transition
              duration-200
              
              flex items-center justify-between gap-2 cursor-pointer
            
            ">
              <FaBookOpen />View Full Menu
            </button>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About