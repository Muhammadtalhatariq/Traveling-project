import React from "react";

const page = () => {
  return (
    <>
      <div className="sm:mx-10" id="AboutUs">
        {/* EXPLORE TRAVEL AIR INTERNATINOL */}
        <div className="mt-16">
          <div className="flex justify-center md:gap-20 mx-4 md:mx-0">
            <div>
              <img src="/image 6.png" alt="" />
            </div>
            <div>
              <h4 className="md:text-xl text-center text-sm font-semibold xl:mt-10 mt-3 font-serif">
                Explore Travel Air International
              </h4>
            </div>
            <div>
              <img src="/image 6.png" alt="" />
            </div>
          </div>
          <div className="flex md:justify-center mt-10">
            <div className="lg:w-[65%] w-full  ">
              <p className="md:text-center text-justify font-serif px-4">
                TRAVELAIR INTERNATIONAL is one of the leading lATA accredited
                travel agencies of Islamabad (Pakistan) well established since
                1974, offering airline reservations, ticketing of major
                international and domestic airlines and variety of other travel
                related services.
              </p>
            </div>
          </div>
          <div className="flex sm:justify-end justify-center  mt-10 lg:px-16">
            <div className="lg:w-[65%] w-full">
              <p className="md:text-center text-justify font-serif px-4">
                TRAVELAIR INTERNATIONAL is one of the leading lATA accredited
                travel agencies of Islamabad (Pakistan) well established since
                1974, offering airline reservations, ticketing of major
                international and domestic airlines and variety of other travel
                related services.
              </p>
            </div>
          </div>
        </div>
        {/* WELCOME TRAVEL AIR INTERNATIONAL */}
        <div className=" flex justify-center ">
          <div className="flex justify-around flex-col lg:flex-row lg:gap-2 p-2 w-full  ">
            {/* IMAGE SECTION */}
            <div className="image-section text-center xl:justify-start  flex justify-center w-full lg:w-1/2">
              <img className="md:object-contain" src="/pexel.png" alt="" />
            </div>
            {/* TEXT AREA SECTION */}
            <div className="flex justify-center items-center flex-wrap w-full lg:w-1/2 px-2 ">
              <h1 className="font-semibold font-serif text-center md:text-3xl text-2xl lg:px-16 pt-3 md:pt-0">
                Welcome Travel Air InterNational
              </h1>
              <div className="lg:px-4">
                <h5 className="font-semibold text-xl">Vision:</h5>
                <p className="font-serif pt-2 text-justify ">
                  To see Travelair International has become a standard and
                  aspires to be seen as the benchmark against which others are
                  judged.
                </p>
              </div>
              <div className="lg:px-4">
                <h4 className="font-semibold text-xl ">Mission & Objective:</h4>
                <p className="font-serif pt-2 text-justify  ">
                  Endeavor to expand the tourism potential and strive to excel
                  in providing optimum value travel services to the travellers
                  and to excel in tourism related services backed by efficient
                  and effective planning while seeking to enlarge their scope
                  and dimension.Endeavor to expand the tourism potential and
                  strive to excel in providing optimum value travel services to
                  the travellers and to excel in tourism related services backed
                  by efficient and effective planning while seeking to enlarge
                  their scope and dimension.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
