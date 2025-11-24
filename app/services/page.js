import { FaTools, FaCarCrash, FaSnowflake, FaCarSide, FaBolt, FaDoorOpen } from "react-icons/fa";

const services = [
    {
        id: "01",
        title: "AC Cooling Service",
        desc: "Professional AC repair, gas refilling, and cooling optimization.",
        icon: <FaSnowflake size={26} />,
    },
    {
        id: "02",
        title: "Accident Repairs",
        desc: "Minor & major accident restoration with premium body work.",
        icon: <FaCarCrash size={26} />,
    },
    {
        id: "03",
        title: "Door Alignment & Repair",
        desc: "Fixing jammed doors, hinges, alignment and smooth opening.",
        icon: <FaDoorOpen size={26} />,
    },
    {
        id: "04",
        title: "Dent & Scratch Removal",
        desc: "Premium dent pulling and scratch removal with zero color mismatch.",
        icon: <FaTools size={26} />,
    },
    {
        id: "05",
        title: "Wiring & Electrical Repair",
        desc: "Complete vehicle wiring, electrical issue diagnosis, AC wiring, and system restoration.",
        icon: <FaBolt size={26} />,
    },
    {
        id: "06",
        title: "General Car Service",
        desc: "Complete vehicle check-up, oil service & performance tuning.",
        icon: <FaCarSide size={26} />,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-[#fff7f2] overflow-hidden pt-[140px]">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-4xl md:text-5xl font-bold text-[#ff5b00]">
                    Premium Car Care & Repair Services
                </h2>

                <p className="text-gray-600 mt-3 mb-12">
                    From AC repair to accident restoration, we handle everything with expert precision.
                </p>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-20">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
                        >
                            {/* TOP NUMBER BADGE */}
                            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-100 text-[#001b3a] font-bold 
                              w-20 h-20 flex items-center justify-center text-2xl rounded-full
                              border border-gray-300 z-20">
                                {service.id}
                            </div>

                            {/* HEXAGON BORDER EFFECT */}
                            <div className="absolute inset-0 rounded-2xl border-3 border-transparent group-hover:border-[#ff5b00] transition-all duration-300"></div>

                            {/* TITLE */}
                            <h3 className="text-2xl mt-10 font-semibold text-[#001b3a]">
                                {service.title}
                            </h3>

                            <p className="text-gray-500 mt-3">
                                {service.desc}
                            </p>

                            {/* READ MORE */}
                            <p className="mt-6 font-medium text-[#001b3a] group-hover:text-[#ff5b00] transition-all cursor-pointer flex items-center justify-center gap-2">
                                {/* READ MORE → */}
                            </p>

                            {/* ICON BADGE */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 
                              rounded-full bg-white shadow-lg flex items-center justify-center
                              text-[#001b3a] group-hover:bg-[#ff5b00] group-hover:text-white 
                              transition-all border">
                                {service.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
