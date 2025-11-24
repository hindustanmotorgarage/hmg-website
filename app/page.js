import Image from "next/image";


export default function Home() {
  return (
    <section id="home" className="relative w-full h-[100vh] flex items-center px-10 bg-[#001b3a] text-white overflow-hidden pt-[140px]">
      {/* Background Image */}
      <Image
        src="/images/repairing car.jpg"
        alt="AC Repair Background"
        fill
        className="object-cover opacity-40"
      />


      {/* Left Content */}
      <div className="relative z-10 max-w-xl">
        <p className="text-[#ff5b00] font-semibold mb-2 text-lg">⚙ Repairing Services</p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug md:leading-tight ">
  Your One-Stop Solution for Car Repair,<br /> AC Service & Accident Work
</h1>


        <p className="mt-4 text-gray-200">
          From AC problems to door issues, body scratches, dents,
          and accident damage, we repair everything with care.
        </p>


        {/* Buttons */}
        {/* <div className="flex items-center gap-4 mt-8">
          <button className="bg-[#ff5b00] px-6 py-3 rounded-md text-lg font-medium hover:bg-[#e04f00] transition">
            READ MORE →
          </button>


          <button className="flex items-center gap-2 text-lg border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#001b3a] transition">
            ▶ Watch Our Story
          </button>
        </div> */}
      </div>


      {/* Right Vector Overlays */}
      {/* Right Vector Overlays with Image */}
     {/* Right Vector Overlays - Hidden on Mobile */}
<div className="absolute right-0 top-0 w-[50%] h-full clip-custom z-0 overflow-hidden hidden md:block">
  <Image
    src="/images/car-r.png"
    alt="Garage Repair"
    fill
    className="object-cover"
  />
</div>

    </section>
  );
}


