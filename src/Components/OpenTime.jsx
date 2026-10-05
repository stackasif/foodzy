import {
  CalendarDays,
  MapPin,
  Phone,
  Mail,
  Truck,
} from "lucide-react";

const hours = [
  { day: "Monday - Tuesday", time: "Closed", closed: true },
  { day: "Wednesday - Thursday", time: "09:00 AM - 10:00 PM" },
  { day: "Friday", time: "09:00 AM - 11:00 PM" },
  { day: "Saturday", time: "10:00 AM - 11:30 PM" },
  { day: "Sunday", time: "11:00 AM - 09:00 PM" },
];

export default function OpenTime() {
  return (
    <section className="bg-[#155d45] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10 text-center" data-aos="fade-right">
          <p className="font-serif text-sm italic text-emerald-200">
            Opening Hours
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
            We're Open{" "}
            <span className="text-orange-400">For You</span>
          </h2>

          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3" data-aos="fade-left">

          {/* Opening Hours */}
          <div className="rounded-2xl border border-white/20 bg-white/5 p-5">
            {hours.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between border-b border-white/10 py-3 last:border-0"
              >
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <CalendarDays
                    size={14}
                    className="text-orange-400"
                  />
                  {item.day}
                </div>

                <div
                  className={`text-xs font-bold ${
                    item.closed ? "text-red-400" : "text-white"
                  }`}
                >
                  {!item.closed && (
                    <span className="mr-1 inline-block h-2 w-2 rounded-full bg-green-400" />
                  )}
                  {item.closed && (
                    <span className="mr-1 inline-block h-2 w-2 rounded-full bg-red-400" />
                  )}
                  {item.time}
                </div>
              </div>
            ))}
          </div>

          {/* Order Online */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-red-500 px-5 py-6 text-center shadow-xl">
            <Truck size={34} className="text-white" />

            <h3 className="mt-3 font-serif text-xl font-bold text-white">
              Order Online
            </h3>

            <p className="mt-1 text-xs text-white">
              Get hot food delivered in 25 minutes
            </p>

            <button className="mt-5 rounded-full bg-white px-6 py-3 text-xs font-bold text-red-500 transition hover:bg-gray-100">
              Order Now ?
            </button>
          </div>

          {/* Contact */}
          <div className="rounded-2xl border border-white/20 bg-white/5 p-5">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-white">
              <MapPin size={15} className="text-orange-400" />
              Find Us
            </h3>

            <div className="border-b border-white/10 py-3">
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-sm font-medium text-white">
                  <MapPin size={14} className="text-orange-400" />
                  Address
                </span>
                <span className="text-right text-xs font-bold text-white">
                  42 Flavor Street, NY
                </span>
              </div>
            </div>

            <div className="border-b border-white/10 py-3">
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-sm font-medium text-white">
                  <Phone size={14} className="text-orange-400" />
                  Phone
                </span>
                <span className="text-xs font-bold text-white">
                  +1 (800) 123-4567
                </span>
              </div>
            </div>

            <div className="py-3">
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-sm font-medium text-white">
                  <Mail size={14} className="text-orange-400" />
                  Email
                </span>
                <span className="text-xs font-bold text-white">
                  hello@sarabfood.com
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}