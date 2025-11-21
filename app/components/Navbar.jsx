"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      {/* Top Bar */}
      <div className="w-full bg-[#ff5b00] text-white py-2 px-4 flex justify-between text-sm">
        <p className="hidden md:block">
          Welcome to Hindustan Motor Garage – Excellence in Car Repair & Maintenance
        </p>

        <div className="flex items-center gap-3 ml-auto md:ml-0 ">
          <span className="">Follow Us On:</span>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} className=" border rounded-md" />
          <div>
            <h2 className="text-2xl font-semibold text-[#00214d]">Hindustan Motor Garage</h2>
            <p className="text-sm -mt-1 text-[#ff5b00]">Repairing Services</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-2xl items-center gap-8 text-[#00214d] font-medium">
          <li
            className="hover:text-[#ff5b00] cursor-pointer"
            onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}
          >
            Home
          </li>

          <li
            className="hover:text-[#ff5b00] cursor-pointer"
            onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
          >
            About
          </li>

          <li
            className="hover:text-[#ff5b00] cursor-pointer"
            onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}
          >
            Services
          </li>

          <li
            className="hover:text-[#ff5b00] cursor-pointer"
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          >
            Contact
          </li>
        </ul>


        {/* Desktop Button */}
        <button
          onClick={() => document.getElementById("footer").scrollIntoView({ behavior: "smooth" })}
          className="hidden md:block bg-[#ff5b00] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#e04f00] transition"
        >
          SEE ADDRESS ↡
        </button>

        {/* Mobile Hamburger */}
        <button
          className="block md:hidden text-3xl text-[#00214d]"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform 
        transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          className="text-3xl absolute top-4 right-4 text-[#00214d]"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        {/* Mobile Menu Items */}
        <ul className="mt-16 flex flex-col gap-6 text-lg text-[#00214d] font-medium px-6">
          <li onClick={() => setOpen(false)} className="hover:text-[#ff5b00] cursor-pointer">
            Home
          </li>
          <li onClick={() => setOpen(false)} className="hover:text-[#ff5b00] cursor-pointer">
            About
          </li>
          <li onClick={() => setOpen(false)} className="hover:text-[#ff5b00] cursor-pointer">
            Services
          </li>
          <li onClick={() => setOpen(false)} className="hover:text-[#ff5b00] cursor-pointer">
            Contact
          </li>

          {/* Mobile Button */}
          <button
            onClick={() =>
              document.getElementById("footer").scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#ff5b00] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#e04f00] transition w-full md:w-auto text-center"
          >
            SEE ADDRESS ↓
          </button>

        </ul>
      </div>

      {/* Overlay Background */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm md:hidden"
        ></div>
      )}
    </header>
  );
}
