import { useEffect, useState } from "react";

export default function Offer() {
  const [time, setTime] = useState({
    hours: 8,
    minutes: 23,
    seconds: 26,
  });

  // Countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }

        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }

        if (prev.minutes > 0) {
          return {
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59,
          };
        }

        return {
          hours: prev.hours - 1,
          minutes: 59,
          seconds: 59,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (

    <section className="w-full bg-[#260000]" >
  
  <div className="mx-auto max-w-[1280px] px-5 py-10" >
    
    <section className="relative min-h-screen overflow-hidden px-5 py-8 sm:px-8 lg:px-12">
      {/* Background diagonal pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent 0px, transparent 34px, rgba(255,255,255,0.12) 35px, transparent 36px)",
          }}
        />
      </div>

      {/* Main glow */}
      <div className="pointer-events-none absolute right-[10%] top-[25%] h-[400px] w-[400px] rounded-full bg-orange-600/10 blur-[100px]" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-[1460px] items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1" data-aos="fade-right">
            
            {/* Limited offer badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-lg bg-[#ffac18] px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-[#260000] sm:text-sm">
              <span>⚡</span>
              Limited Time Offer
            </div>

            {/* Heading */}
            <h1 className="max-w-[650px] font-serif text-[48px] font-bold leading-[0.98] text-white sm:text-[64px] lg:text-[68px] xl:text-[72px]">
              Get 30% Off
              <br />
              Our Signature
              <br />
              <span className="text-[#ffad18]">Burger</span> Meal
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[700px] text-base leading-7 text-gray-300 sm:text-lg">
              Don't miss our weekend special - grab our award-winning
              signature burger combo with loaded fries and a premium shake
              at an unbeatable price.
            </p>

            {/* Countdown */}
            <div className="mt-8 flex gap-3 sm:gap-4">
              <CountdownBox
                value={time.hours}
                label="Hours"
              />

              <CountdownBox
                value={time.minutes}
                label="Minutes"
              />

              <CountdownBox
                value={time.seconds}
                label="Seconds"
              />
            </div>

            {/* CTA */}
            <button className="mt-7 flex items-center gap-3 rounded-full bg-[#ef271c] px-8 py-4 text-base font-bold text-white shadow-lg shadow-red-900/30 transition hover:scale-105 hover:bg-red-600 active:scale-95">
              <CartIcon />
              Grab the Deal
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end" data-aos="fade-left">
            <div className="relative w-full max-w-[540px]">
              
              {/* Price bubble */}
              <div className="absolute  md:-left-2 right-1 md:top-6 z-10 flex h-[60px] w-[60px] md:h-[100px] md:w-[100px] -translate-x-1/4 items-center justify-center rounded-full bg-[#f02b20] text-center text-white shadow-xl sm:-left-5 sm:h-[110px] sm:w-[110px]">
                <div>
                  <div className="md:text-xs text-[10px] line-through opacity-80">
                    $24.99
                  </div>
                  <div className="md:text-2xl text-[14px] font-bold">
                    $17.49
                  </div>
                </div>
              </div>

              {/* Burger image */}
              <div className="overflow-hidden bg-black shadow-2xl">
                <img
                  src="/offer.png"
                  alt="Signature burger with loaded fries"
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Image glow */}
              <div className="absolute -bottom-10 left-1/2 -z-10 h-32 w-3/4 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
   

  </div>

</section>
  
        
  );
}


/* Countdown box */
function CountdownBox({ value, label }) {
  return (
    <div className="flex h-[90px] w-[90px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] sm:h-[90px] sm:w-[96px]">
      <span className="font-serif text-3xl font-bold text-white">
        {String(value).padStart(2, "0")}
      </span>

      <span className="mt-1 text-[10px] uppercase tracking-wide text-gray-400">
        {label}
      </span>
    </div>
  );
}


/* Shopping cart icon */
function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 4h13M9 21a1 1 0 100-2 1 1 0 000 2zm9 0a1 1 0 100-2 1 1 0 000 2z"
      />
    </svg>
  );
}