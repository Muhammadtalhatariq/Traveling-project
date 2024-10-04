import React from "react";

const services = [
  {
    id: 1,
    title: "Ticket Managing",
    img: "/tickiting.png",
  },
  {
    id: 2,
    title: "AirLine Reservation",
    img: "/3213.png",
  },
  {
    id: 3,
    title: "Hotel Booking",
    img: "/HB.webp",
  },
  {
    id: 4,
    title: " Rental Cars",
    img: "/RC1.jfif",
  },
  {
    id: 5,
    title: "Visa assistance",
    img: "/VS.jfif",
  },
  {
    id: 6,
    title: "Travel Insurance",
    img: "/TI.jfif",
  },
  {
    id: 7,
    title: "Delivery at Door step",
    img: "/DDS1.avif",
  },
  {
    id: 8,
    title: "24 Hour Servives",
    img: "/2hs.jpg",
  },
];

const page = () => {
  return (
    <>
      <div className="mt-24 md:mx-16 mx-4" id="Services">
        <h3 className="text-center md:text-2xl text-xl font-semibold">OUR SERVICES</h3>
        <div className="flex flex-wrap md:justify-between justify-center mt-10 md:gap-8 gap-4 ">
          {services.map((item) => (
            <div
              key={item.id}
              className=" w-[280px] h-[300px] bg-white shadow-2xl xl:mt-0 mt-6 hover:scale-105 border-b-4 border-blue-600"
            >
              <div>
                <img  src={item.img} alt={item.title}  className="h-60 w-80 bg-cover overflow-hidden"/>
                <p className="font-bold text-xl font-serif mt-4 p-0 text-center">
                  {item.title}
                </p>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
