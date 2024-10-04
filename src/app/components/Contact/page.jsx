"use client";
import React, { useState } from "react";

const page = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log("Form submitted:", {
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      comments,
    });
  };

  return (
    <div
      className="flex items-center justify-around flex-col md:flex-row min-h-screen w-full bg-white"
      id="Contact"
    >
      <div className="flex justify-center  w-full md:w-1/2">
        <img
          className="w-80 md:w-full md:mx-10 md:h-[28rem] "
          src="/image 12.png"
          alt=""
        />
      </div>

      <div className="bg-white md:p-8  w-full md:w-1/2 ">
        <div className="-500 text-center py-4 font-bold text-2xl mb-6">
          <h1>Know More About Travel Air International</h1>
        </div>

        <div className="rounded-lg shadow-md md:p-6 md:border-[1px] border-black ">
          <form onSubmit={handleSubmit} className="space-y-4 mx-6 ">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 p-2 w-full border rounded-md outline-none"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 p-2 w-full border rounded-md outline-none"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="mt-1 p-2 w-full border rounded-md outline-none"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="emailAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="emailAddress"
                className="mt-1 p-2 w-full border rounded-md"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="comments"
                className="block text-sm font-medium text-gray-700"
              >
                Comments
              </label>
              <textarea
                id="comments"
                className="mt-1 p-2 w-full border rounded-md outline-none"
                rows="4"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
