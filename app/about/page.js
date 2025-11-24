import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-16 px-6 md:px-16 bg-white overflow-hidden pt-[140px]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE STACK */}
        <div className="relative w-full flex justify-center md:block">

          {/* Sparkles */}
          <div className="absolute -top-4 -left-4 text-[#ff5b00] text-3xl md:text-4xl select-none pointer-events-none">
            ✨✨
          </div>

          {/* MAIN IMAGE */}
          <div className="relative w-[95%] md:w-[80%] rounded-2xl overflow-hidden shadow-xl border-[6px] border-white bg-gray-200 h-[260px] sm:h-[320px] md:h-[420px] mx-auto">
            <Image
              src="/images/about1.jpg"
              alt="Technician Outdoor"
              fill
              className="object-cover"
            />
          </div>

          {/* SMALL IMAGE */}
          <div className="
            absolute
            bottom-[-25px] right-[-15px]
            sm:bottom-[-30px] sm:right-[-25px]
            md:bottom-[-35px] md:right-[-35px]
            w-[55%] sm:w-[50%] md:w-[45%]
            h-[150px] sm:h-[190px] md:h-[240px]
            rounded-2xl overflow-hidden shadow-xl border-[6px] border-white bg-gray-200
          ">
            <Image
              src="/images/about2.jpg"
              alt="Technician Indoor"
              fill
              className="object-cover"
            />
          </div>

          {/* ORANGE OUTLINE BEHIND SMALL IMAGE */}
          <div className="
            absolute 
            bottom-[-40px] right-[-30px]
            sm:bottom-[-45px] sm:right-[-35px]
            md:bottom-[-55px] md:right-[-45px]
            w-[55%] sm:w-[50%] md:w-[45%]
            h-[65%]
            border-[4px] border-[#ff5b00] rounded-2xl -z-10
          ">
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-5 mt-20 md:mt-0">

          <p className="text-[#ff5b00] text-3xl md:text-4xl font-semibold tracking-wide">
            🛠 ABOUT US
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001b3a] leading-snug">
            Where every repair brings your car back to life
          </h2>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            We provide expert car repair services including AC repair, accident
            restoration, dent removal, body work, door alignment, and complete
            vehicle performance optimization with precision and care.
          </p>

          {/* SERVICE LIST */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-base sm:text-lg">
            {[
              "AC Cooling service",
              "Door alignment & repair",
              "Dent & scratch removal",
              "Minor & major accident repair",
              "Interior cleaning & polishing",
              "Body paint restoration",
            ].map((item, index) => (
              <p
                key={index}
                className="flex items-center gap-2 text-[#001b3a] font-medium"
              >
                <span className="text-[#ff5b00] text-xl">✔</span> {item}
              </p>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-6 mt-10">

            {/* Read More */}
            {/* <button className="
              bg-[#ff5b00] text-white 
              px-8 py-3 sm:py-4 
              rounded-lg font-medium 
              text-lg hover:bg-[#e04f00] transition
            ">
              READ MORE →
            </button> */}

            {/* CALL SECTION */}
            <div className="flex items-center gap-3">
              <div className="
                w-12 h-12 sm:w-14 sm:h-14 
                flex items-center justify-center 
                bg-[#ff5b00] text-white 
                rounded-full text-xl sm:text-2xl
              ">
                <i className="fa-solid fa-phone"></i>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Call anytime for services</p>

                <a
                  href="tel:+918238119705"
                  className="text-[#001b3a] text-lg sm:text-xl font-semibold hover:underline"
                >
                  (+91) 82381 19705
                </a>

                <a
                  href="tel:+917265924482"
                  className="text-[#001b3a] text-lg sm:text-xl font-semibold hover:underline block"
                >
                  (+91) 72659 24482
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
