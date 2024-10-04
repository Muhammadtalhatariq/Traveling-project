import React from "react";

const Airlines = [
  {
    id: 1,
    img: "/Airblue-removebg-preview.png",
  },
  {
    id: 2,
    img: "/airsial-removebg-preview.png ",
  },
  {
    id: 3,
    img: "/British-removebg-preview.png ",
  },
  {
    id: 4,
    img: "/eithad-removebg-preview.png",
  },
  {
    id: 5,
    img: "/gulf-removebg-preview.png ",
  },
  {
    id: 6,
    img: "/KLM_logo-removebg-preview.png",
  },
  {
    id: 7,
    img: "/Malasyia-removebg-preview.png",
  },
  {
    id: 8,
    img: "/Oman-removebg-preview.png ",
  },
  {
    id: 9,
    img: "/PIA-removebg-preview.png",
  },
  {
    id: 10,
    img: "/qatar-removebg-preview.png ",
  },
  {
    id: 11,
    img: "/serene-removebg-preview.png",
  },
  {
    id: 12,
    img: "/sirilankkan-removebg-preview.png",
  },
  {
    id: 13,
    img: "/suadia-removebg-preview.png",
  },
  {
    id: 14,
    img: "/swiss-removebg-preview.png",
  },
  {
    id: 15,
    img: "/Thai_Airways.png ",
  },
  {
    id: 16,
    img: "/turkish-removebg-preview.png",
  },
];

const page = () => {
  return (
    <>
      <div className=" mt-28 md:mx-16 mx-6" id="AirLines">
        <h2 className=" font-semibold text-xl text-center">
          Major Sellable Airlines
        </h2>
        <div className="flex flex-wrap xl:gap-0 gap-3 justify-center items-center md:justify-between p-4">
          {Airlines.map((item) => (
            <div key={item.id} className=" shadow-lg p-4 w-[200px] h-auto flex justify-center  mt-6 hover:scale-105">
              <img
                className="w-[100px] object-contain"
                src={item.img}
                alt="Air-lines"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
