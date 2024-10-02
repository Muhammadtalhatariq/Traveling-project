"use client"
import React, { useState } from 'react';

const page = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log('Form submitted:', {
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      comments,
    });
  };

  return (
    <div className="flex items-center justify-around flex-col md:flex-row min-h-screen bg-white">
         <div className='flex justify-center'>
            <img className='xl:w-[300px] lg:w-[80%] w-[90%]' src="/image 12.png" alt="" />
        </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
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
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
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
  );
};

export default page;