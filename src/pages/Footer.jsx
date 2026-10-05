import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaChevronRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-gray-400" >

      {/* Main Footer */}
      <div className="mx-auto max-w-[1280px] px-6 py-12" data-aos="zoom-in">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-white">
              Food<span className="text-red-500">zy</span>
            </h2>

            <p className="max-w-sm text-sm leading-6">
              We bring the world's finest flavors together in a fast,
              friendly, and affordable experience. Every meal crafted
              with love.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex gap-2">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#292929] hover:bg-red-600 hover:text-white"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#292929] hover:bg-red-600 hover:text-white"
              >
                <FaInstagram size={14} />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#292929] hover:bg-red-600 hover:text-white"
              >
                <FaTwitter size={14} />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#292929] hover:bg-red-600 hover:text-white"
              >
                <FaYoutube size={14} />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#292929] hover:bg-red-600 hover:text-white"
              >
                <FaTiktok size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="relative mb-5 inline-block pb-3 text-sm font-bold text-white">
              Quick Links

              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-red-500"></span>
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-red-500"
                >
                  <FaChevronRight size={10} className="text-red-500" />
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-red-500"
                >
                  <FaChevronRight size={10} className="text-red-500" />
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-red-500"
                >
                  <FaChevronRight size={10} className="text-red-500" />
                  Our Menu
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-red-500"
                >
                  <FaChevronRight size={10} className="text-red-500" />
                  Reservation
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-red-500"
                >
                  <FaChevronRight size={10} className="text-red-500" />
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-red-500"
                >
                  <FaChevronRight size={10} className="text-red-500" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Menu */}
          <div>
            <h3 className="relative mb-5 inline-block pb-3 text-sm font-bold text-white">
              Our Menu

              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-red-500"></span>
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-red-500"
                >
                  <FaChevronRight size={10} className="text-red-500" />
                  Burgers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-red-500"
                >
                  <FaChevronRight size={10} className="text-red-500" />
                  Pizza
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-red-500"
                >
                  <FaChevronRight size={10} className="text-red-500" />
                  Fried Chicken
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-red-500"
                >
                  <FaChevronRight size={10} className="text-red-500" />
                  Wraps & Rolls
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-red-500"
                >
                  <FaChevronRight size={10} className="text-red-500" />
                  Pasta
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-red-500"
                >
                  <FaChevronRight size={10} className="text-red-500" />
                  Desserts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="relative mb-5 inline-block pb-3 text-sm font-bold text-white">
              Get In Touch

              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-red-500"></span>
            </h3>

            <div className="space-y-4">

              {/* Address */}
              <div className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#321b1b] text-red-500">
                  <FaMapMarkerAlt size={13} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">
                    Address
                  </p>

                  <p className="mt-1 text-xs">
                    Noida, Sector-16
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#321b1b] text-red-500">
                  <FaPhoneAlt size={12} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">
                    Phone
                  </p>

                  <p className="mt-1 text-xs">
                    +1 (800) 123-4567
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#321b1b] text-red-500">
                  <FaEnvelope size={13} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">
                    Email
                  </p>

                  <p className="mt-1 text-xs">
                    hello@foodzy.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#321b1b] text-red-500">
                  <FaClock size={13} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">
                    Hours
                  </p>

                  <p className="mt-1 text-xs">
                    Wed - Sun: 09 AM - 11 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#292929]" >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 text-xs md:flex-row md:items-center md:justify-between">

          {/* Copyright */}
          <div >
            <p>
              © 2026{" "}
              <span className="font-semibold text-red-500">
                Foodzy Restaurant
              </span>{" "}
              All Rights Reserved by{" "}
              <span className="font-semibold text-green-500">
                Asif.
              </span>
            </p>

            
          </div>

          {/* Legal Links */}
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms
            </a>

            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}