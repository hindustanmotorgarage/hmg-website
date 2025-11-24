import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const contacts = [
    {
      name: "Masudbhai Saleh",
      role: "Accident Repair & Bodywork Expert",
      number: "+91 82381 19705",
      whatsapp: "918238119705",
    },
    {
      name: "Salmanbhai Saleh",
      role: "AC Diagnostic, Repair & Wiring Technician",
      number: "+91 72659 24482",
      whatsapp: "917265924482",
    },
    {
      name: "Mustakimbhai Saleh",
      role: "Door Mechanism & Alignment Specialist",
      number: "+91 70453 03594",
      whatsapp: "917045303594",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-20 bg-[#fff7f2] overflow-hidden pt-[140px]"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 items-center">

        {/* Left Image */}
        <div className="relative w-full h-[320px] sm:h-[380px] md:h-[500px]">
          <Image
            src="/images/contact.png"
            alt="AC Technician"
            fill
            className="rounded-3xl object-cover shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-[#ff5b00] font-semibold mb-2 text-base md:text-lg tracking-wide">
            📞 WHY CONTACT US
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#001b3a] mb-4">
            Connect With Our
            <span className="text-[#ff5b00]"> Expert Technicians</span>
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
            Our skilled technicians are ready to assist you with AC servicing,
            deep cleaning, emergency repair, and accident-related car work.
          </p>

          {/* Contact Cards */}
          <div className="space-y-8">
            {contacts.map((person, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-5 p-5 bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_26px_rgba(0,0,0,0.10)] transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-[#ff5b00] text-white rounded-full flex items-center justify-center text-2xl shadow-md mx-auto sm:mx-0">
                  <FaPhoneAlt />
                </div>

                {/* Text */}
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-xl font-semibold text-[#001b3a]">
                    {person.name}
                  </p>

                  <p className="text-gray-500 text-sm sm:text-base -mt-1">
                    {person.role}
                  </p>

                  {/* Phone */}
                  <p className="text-lg text-[#001b3a] font-semibold mt-2">
                    <a href={`tel:${person.number}`}>{person.number}</a>
                  </p>

                  {/* Buttons */}
                  <div className="flex justify-center sm:justify-start gap-6 mt-3">
                    <a
                      href={`tel:${person.number}`}
                      className="flex items-center gap-2 text-[#ff5b00] font-medium hover:underline"
                    >
                      <FaPhoneAlt /> Call
                    </a>

                    <a
                      href={`https://wa.me/${person.whatsapp}`}
                      className="flex items-center gap-2 text-green-600 font-medium hover:underline"
                    >
                      <FaWhatsapp /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
