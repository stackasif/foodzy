import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaClock 
} from "react-icons/fa";

import { FaLocationDot,FaPhone } from "react-icons/fa6";
import { IoMdMail,IoIosSend  } from "react-icons/io";



export default function ContactSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 scroll-mt-24" id="contact">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="text-center" data-aos="fade-up">
          <p className="font-serif text-sm italic text-red-500">
            Get In Touch
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Contact <span className="text-red-500">Us</span>
          </h2>

          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" />

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-500">
            Have a question, feedback, or want to plan a special event?
            <br />
            We'd love to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-[348px_1fr]">

          {/* Left Info Card */}
          <div className="rounded-2xl bg-[#1b1b1b] p-8 text-white" data-aos="fade-right">

            <h3 className="font-serif text-xl">
              Let's Talk
            </h3>

            <p className="mt-1 text-sm leading-5 text-gray-400">
              We typically respond within 2 hours during
              <br className="hidden sm:block" />
              business hours.
            </p>

            {/* Address */}
            <div className="mt-6 flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/20 text-red-500">
                <FaLocationDot size={16}/>
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-wide text-gray-400">
                  ADDRESS
                </p>

                <p className="mt-1 text-xs font-semibold leading-5">
                  42 Flavor Street, Manhattan,
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="mt-4 flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/20 text-red-500">
                <FaPhone size={16} />
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-wide text-gray-400">
                  PHONE
                </p>

                <p className="mt-1 text-xs font-semibold">
                  +1 (800) 123-4567
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="mt-4 flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/20 text-red-500">
                <IoMdMail size={16} />
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-wide text-gray-400">
                  EMAIL
                </p>

                <p className="mt-1 text-xs font-semibold">
                  hello@sarabfood.com
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-4 flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/20 text-red-500">
                <FaClock  size={16} />
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-wide text-gray-400">
                  WORKING HOURS
                </p>

                <p className="mt-1 text-xs font-semibold">
                  Wed - Sun: 9 AM - 11 PM
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-5 flex gap-2">
  <SocialIcon>
    <FaFacebookF size={14} />
  </SocialIcon>

  <SocialIcon>
    <FaInstagram size={14} />
  </SocialIcon>

  <SocialIcon>
    <FaTwitter size={14} />
  </SocialIcon>

  <SocialIcon>
    <FaYoutube size={14} />
  </SocialIcon>
</div>
          </div>

          {/* Form */}
          <form className="rounded-2xl bg-white p-6 shadow-lg sm:p-7" data-aos="fade-left">

            {/* Inputs */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <Input
                label="Your Name *"
                placeholder="John Doe"
              />

              <Input
                label="Email Address *"
                placeholder="you@email.com"
                type="email"
              />

              <Input
                label="Phone Number"
                placeholder="+1 (800) 000-0000"
              />

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-gray-800">
                  Subject *
                </label>

                <select className="h-10 w-full rounded-lg border border-gray-200 px-3 text-xs outline-none focus:border-red-500">
                  <option>General Inquiry</option>
                  <option>Feedback</option>
                  <option>Order Issue</option>
                  <option>Event Booking</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-semibold text-gray-800">
                Message *
              </label>

              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full resize-none rounded-lg border border-gray-200 p-3 text-xs outline-none focus:border-red-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-5 flex items-center gap-2 rounded-full bg-red-500 px-7 py-3 text-xs font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-600"
            >
              <IoIosSend  size={14} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* Input Component */
function Input({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-gray-800">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="h-10 w-full rounded-lg border border-gray-200 px-3 text-xs outline-none focus:border-red-500"
      />
    </div>
  );
}

/* Social Icon */
function SocialIcon({ children }) {
  return (
    <a
      href="#"
      className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-gray-400 transition hover:bg-red-500 hover:text-white"
    >
      {children}
    </a>
  );
}