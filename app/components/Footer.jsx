const Footer = () => {
    return (
        <footer id="footer" className="bg-[#041534] text-white ">

            {/* Address Section – fixed spacing */}
            <div className="text-center text-gray-100 mb-7 border-t border-gray-700 pt-3 px-4">
                <div className="flex items-center justify-center gap-3 flex-wrap">
                    <i className="fa-solid fa-location-dot text-[#ff5b00] text-2xl"></i>

                    <span className="text-xl leading-relaxed ">
                        Near Autonation Car Care, Opp. Anand Hotel, Near Kakoshi Chokdi,  
                        Sidhapur – 384151.
                    </span>
                </div>
            </div>

            {/* Top Footer */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                {/* Logo & Contact */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden">
                            <img
                                src="images/logo.png"
                                alt="Hindustan Motor Garage Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-bold leading-tight">
                                Hindustan Motor Garage
                            </h2>
                            <p className="text-orange-400 text-sm">Repairing Services</p>
                        </div>
                    </div>

                    <p className="text-gray-300 mb-3 text-sm md:text-base">Need Any Repairing Help</p>

                    <div className="space-y-1">
                        <p className="text-orange-400 font-semibold text-lg">+91 82381 19705</p>
                        <p className="text-orange-400 font-semibold text-lg">+91 72659 24482</p>
                    </div>
                </div>

                {/* Our Services */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Our Services</h3>
                    <div className="w-16 h-1 bg-orange-500 mb-4"></div>

                    <ul className="space-y-2 text-gray-300 list-disc pl-5 text-sm md:text-base">
                        <li>Car AC Repair & Service</li>
                        <li>Accident Car Body Repair</li>
                        <li>Door Dent Repair & Alignment</li>
                        <li>Wiring & Electrical Repair</li>
                        <li>Full Body Paint Restoration</li>
                    </ul>
                </div>

                {/* Working Hours */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
                    <div className="w-16 h-1 bg-orange-500 mb-4"></div>

                    <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                        <li className="flex justify-between">
                            <span>Mon – Sat</span>
                            <span>8:00 AM – 8:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Sunday</span>
                            <span>Closed</span>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <div className="w-16 h-1 bg-orange-500 mb-4"></div>

                    <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                        <li><a href="#home" className="hover:text-white transition">Home</a></li>
                        <li><a href="#about" className="hover:text-white transition">About</a></li>
                        <li><a href="#services" className="hover:text-white transition">Services</a></li>
                        <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-orange-600 mt-6 py-4 text-xs sm:text-sm flex flex-col md:flex-row justify-center md:justify-between items-center px-6 gap-3 md:gap-0">
                <p className="text-center">Copyright © 2025 Hindustan Motor Garage. All Rights Reserved.</p>

                <div className="flex gap-4">
                    <span>Setting & Privacy</span>
                    <span>• FAQ</span>
                    <span>• Support</span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
