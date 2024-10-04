"client side";
import Image from "next/image";

const page = () => {
  return (
    <div className="container mx-auto  py-20  min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
      <div className=" flex flex-col gap-4 text-white w-full">

        <div className="md:relative ">
          <div className="md:absolute md:right-0 py-4 md:py-0 flex flex-col md:flex-row justify-center items-center md:rounded-l-full bg-blue-800 rounded-lg shadow-md mb-4 md:w-2/3 ">
            <div className=" mb-4 md:mb-0 mr-2">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="/image 10.png"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className=" p-2 text-center md:text-start">
              <h3 className="text-xl font-bold mb-2">Mr. Shoaib Butt</h3>
              <p className=" mb-4">CEO of Company</p>
              <p className="">
                He started his career in 1973 with American Express. He joined
                British Airways in 1976. He possesses a long managerial
                experience of over 25 years (1976-2001) of dedicated work for
                British Airways at Islamabad and Rawalpindi with an excellent
                sales performance record.
              </p>
            </div>
          </div>
        </div>

        <div className="md:relative">
          <div className="md:absolute md:top-52 py-4 md:py-0 flex flex-col md:flex-row items-center md:rounded-r-full bg-blue-800 rounded-lg shadow-md mb-4 md:w-2/3">
            <div className="px-2 text-center md:text-start">
              <h3 className="text-xl font-bold mb-2">Mr. Adeel Shoaib Butt</h3>
              <p className=" mb-2">Director</p>
              <p className="">
                He started his career in the aviation industry 14 years ago with
                Turkish Airlines. He has been with them since they started
                operations from Islamabad. During his tenure from 2011 till
                2017, he worked in every department from sales, marketing, and
                operations, gaining extensive experience in aviation. In 2017 he
                decided to join Travel Air International as Director.
              </p>
            </div>
            <div className="">
              <div className="relative w-48  rounded-full overflow-hidden">
                <img
                  src="/image 11.png"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
