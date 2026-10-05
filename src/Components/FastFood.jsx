import { useState } from "react";

function FastFood() {
  const images = [
    "/ft-1.png",
    "/ft-2.png",
    "/ft-3.png",
    "/ft-4.png",
    "/ft-5.png",
  ];

  const [openImage, setOpenImage] = useState(null);

  return (
    <section className="w-full bg-[#f8f5f0]">

      {/* Main Content */}
      <div className=" max-w-[1280px] mx-auto px-5 py-10" data-aos="fade-up">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-red-500 italic">
            Food Showcase
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Let's See Our{" "}
            <span className="text-red-500">
              Fast Food
            </span>
          </h1>

          <div className="w-16 h-1 bg-red-500 mx-auto mt-5"></div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="zoom-in">

          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Fast Food ${index + 1}`}
              onClick={() => setOpenImage(index)}
              className={`
                w-full
                object-cover
                rounded-2xl
                cursor-pointer
                hover:scale-[1.02]
                transition
                duration-300
                ${index === 0
                  ? "lg:row-span-2 lg:h-[500px]"
                  : "lg:h-[242px]"
                }
              `}
            />
          ))}

        </div>
      </div>

      {/* Image Popup / Lightbox */}
      {openImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setOpenImage(null)}
        >

          {/* Close Button */}
          <button
            onClick={() => setOpenImage(null)}
            className="absolute top-5 right-5 text-white text-4xl hover:text-red-500 transition"
          >
            ×
          </button>

          {/* Big Image */}
          <img
            src={images[openImage]}
            alt={`Fast Food ${openImage + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90%] max-h-[80%] object-contain rounded-xl"
          />

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();

              setOpenImage(
                openImage === 0
                  ? images.length - 1
                  : openImage - 1
              );
            }}
            className="
              absolute
              left-5
              md:left-10
              text-white
              text-lg
              border
              border-white
              rounded-full
              px-5
              py-2
              hover:bg-white
              hover:text-black
              transition
            "
          >
            ← Prev
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();

              setOpenImage(
                openImage === images.length - 1
                  ? 0
                  : openImage + 1
              );
            }}
            className="
              absolute
              right-5
              md:right-10
              text-white
              text-lg
              border
              border-white
              rounded-full
              px-5
              py-2
              hover:bg-white
              hover:text-black
              transition
            "
          >
            Next →
          </button>

        </div>
      )}

    </section>
  );
}

export default FastFood;