"use client";
import Link from "next/link";
import Form from "./form";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function page() {
  const menu = [
    {
      id: 1,
      name: "home",
      path: "#Home",
    },
    {
      id: 2,
      name: "AirLines",
      path: "#AirLines",
    },
    {
      id: 3,
      name: "Services",
      path: "#Services",
    },
    {
      id: 4,
      name: "About Us",
      path: "#AboutUs",
    },
    {
      id: 5,
      name: "Contact",
      path: "#Contact",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-blue-700  text-white font-sans w-full lg:px-6 ">
      <header className="lg;py-8 py-3 px-2">
        <div className="flex justify-between items-center flex-row gap-3 px-2">
          <h1 className="text-xl text-center sm:text-start font-serif cursor-pointer" >
            Travel Air <br /> International
          </h1>

          <div>
            <button className="md:hidden flex" onClick={handleMenuToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden sm:flex gap-3 text-2xl cursor-pointer ">
            <FaLinkedin />
            <FaWhatsappSquare />
            <FaFacebookSquare />
            <FaInstagramSquare />
          </div>
        </div>
        <nav className="mt-6 flex flex-col md:flex-row space-y-3 sm:space-y-0 sm:space-x-8">
          <ul className="hidden md:flex flex-wrap gap-5 justify-center md:justify-start">
            {menu.map((item, id) =>(
              <li
                key={item.id}
                className="border-[1px] border-white md:p-3 p-2 rounded-full duration-1000 hover:bg-blue-600"
              >
                <div>
                  <Link href={item.path} className="">
                    {item.name}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </nav>
        {/* mbl view  */}
        {isMenuOpen && (
          <nav className="flex flex-col bg-blue-500 w-full px-0">
            <ul className="flex flex-col gap-3 justify-center items-center space-y-2 py-3">
              {menu.map((item, id) =>(
                <li
                  key={item.id}
                  className="border-[1px] border-white  p-4 text-white rounded-full"
                >
                  <div>
                    <Link href={item.path} className="">
                      {item.name}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <p className="mt-6 font-bold text-xl text-center md:text-start">
          Delivering World-Class Travel Experiences Since 1973.
        </p>
      </header>

      {/* Form component */}
      <Form />
    </div>
  );
}
