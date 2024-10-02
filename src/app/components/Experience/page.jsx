"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const page = () => {
  const works = [
    { image: "/texp.jpg" },
    { image: "/texp1.webp" },
    { image: "/texp3.jfif" },
    { image: "/texp4.webp" },
    { image: "/texp6.jfif" },
    { image: "/texp7.jfif" },
    { image: "/texp8.jfif" },
    { image: "/texp.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerRow, setItemsPerRow] = useState(4); // Default: 4 items for larger screens

  // Dynamically update itemsPerRow based on screen size
  useEffect(() => {
    const updateItemsPerRow = () => {
      if (window.innerWidth <= 768) {
        setItemsPerRow(1); // 1 item for small screens
      } else if (window.innerWidth <= 1024) {
        setItemsPerRow(3); // 3 items for medium screens
      } else {
        setItemsPerRow(4); // 4 items for large screens
      }
    };

    updateItemsPerRow(); // Call function on mount
    window.addEventListener("resize", updateItemsPerRow); // Listen for window resize

    return () => window.removeEventListener("resize", updateItemsPerRow); // Cleanup
  }, []);

  const maxIndex = works.length - itemsPerRow;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideStyle = {
    transform: `translateX(-${currentIndex * (100 / itemsPerRow)}%)`,
    transition: "transform 0.5s ease-in-out",
  };

  return (
    <section className="section py-10 overflow-hidden md:mx-20 ">
      <div className="container mx-auto px-2 w-full max-w-full">
        <h1 className="text-center text-4xl font-bold">Experience</h1>
        <div className="flex justify-between items-center pt-3 mb-4 px-4">
          {/* Slider Container */}
          <button
            type="button"
            className=" p-2 bg-gray-200 rounded-full"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
          >
            <MdKeyboardArrowLeft size={20}/>
          </button>

          <div className="relative w-full overflow-hidden">
            <div className="flex justify-between mx-2" style={slideStyle}>
              {works.map((work, id) => (
                <div
                  key={id}
                  className=" flex justify-center items-center"
                  style={{
                    flex: `0 0 ${100 / itemsPerRow}%`, // Dynamically adjust width
                    transition: "flex 0.5s ease-in-out",
                  }}
                >
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="200"
                    className="p-2 flex justify-center items-center"
                  >
                    <img
                      src={work.image}
                      alt={`Slide ${id}`}
                      layout="responsive"
                      className={` object-cover rounded-lg h-60 `}
                    ></img>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            // data-aos='fade-left'
            type="button"
            className=" p-2 bg-gray-200 rounded-full"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            style={{ opacity: currentIndex >= maxIndex ? 0.5 : 1 }}
          >
            <MdKeyboardArrowRight  size={20}/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
