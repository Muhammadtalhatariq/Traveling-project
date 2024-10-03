"use client";
import Link from "next/link";
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

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    depart: "",
    return: "",
    travelers: "",
    cabinClass: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to API
    console.log(formData);
  };

  return (
    <div className="bg-blue-700  text-white font-sans">
      <header className="container mx-auto py-8 px-4 md:px-0">
        <div className="flex justify-between items-center md:flex-row flex-col-reverse gap-3">
          <h1 className="text-xl text-center md:text-start font-serif">
            Travel Air <br /> International
          </h1>
          <div className="flex gap-3 text-2xl cursor-pointer">
            <FaLinkedin /> 
            <FaWhatsappSquare /> 
            <FaFacebookSquare />
            <FaInstagramSquare />
          </div>
        </div>

        <nav className="mt-6 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8">
          <ul className="flex flex-wrap gap-5 justify-center md:justify-start">
            {menu.map((item, id) =>(
              <li
                key={item.id}
                className="border-[1px] border-white md:p-3 p-2  rounded-full"
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
        <p className="mt-6 font-bold text-xl text-center md:text-start">
          Delivering World-Class Travel Experiences Since 1973.
        </p>
      </header>

      <section className="container mx-auto py-6 px-4 md:px-0 flex">
        <form
          onSubmit={handleSubmit}
          className="00 rounded-lg p-8 shadow-md text-black"
        >
          <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center items-center">
            <div className="bg-white rounded-2xl p-4">
              <label htmlFor="from" className="block mb-2">
                From
              </label>
              <input
                type="text"
                id="from"
                name="from"
                value={formData.from}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl outline-none  text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Country, City, Airport"
              />
            </div>
            <div className="bg-white rounded-2xl p-4">
              <label htmlFor="to" className="block mb-2">
                To
              </label>
              <input
                type="text"
                id="to"
                name="to"
                value={formData.to}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md outline-none text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Country, City, Airport"
              />
            </div>
            <div className="bg-white rounded-2xl p-4">
              <label htmlFor="depart" className="block mb-2">
                Depart
              </label>
              <input
                type="date"
                id="depart"
                name="depart"
                value={formData.depart}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md outline-none text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="bg-white rounded-2xl p-4">
              <label htmlFor="return" className="block mb-2">
                Return
              </label>
              <input
                type="date"
                id="return"
                name="return"
                value={formData.return}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md outline-none text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="bg-white rounded-2xl p-4">
              <label htmlFor="Adult, Economy" className="block mb-2">
                Travelers & Cabin Class
              </label>
              <input
                type="text"
                id="Adult, Economy"
                name="Adult, Economy"
                value={formData.return}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md outline-none text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="1 Adult, Economy"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Send Query"
                className="w-full px-4 py-4 rounded-2xl outline-none bg-blue-600 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
