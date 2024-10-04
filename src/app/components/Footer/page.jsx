import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-600  text-white py-8 px-6 md:px-16 lg:px-24 mt-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Follow us here</h3>
          <div className="flex space-x-2 ">
            <a href="#" className="text-white p-2">
              <FaLinkedin size={25} />
            </a>
            <a href="#" className="text-white p-2">
              <FaWhatsappSquare size={25} />
            </a>
            <a href="#" className="text-white p-2">
              <FaFacebookSquare size={25} />
            </a>
            <a href="#" className="text-white p-2">
              <FaInstagramSquare size={25} />
            </a>
          </div>
          <address className="mt-8 text-sm not-italic">
            <p>Office No.32, Block D2</p>
            <p>Chaudhry Plaza, Sixth Avenue, Blue Area</p>
            <p>Islamabad</p>
            <p className="mt-4">Phone: 051-12345678, 23456789</p>
          </address>
          <div className="xl:w-full w-auto h-[200px] mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.417924882525!2d73.0819637!3d33.7240077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf81873bd0d1%3A0xc4db2246f35913dd!2s5%20Jinnah%20Ave%2C%20F-6%2F4%20F%206%2F4%20Blue%20Area%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2s!4v1723950270211!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Airline Reservations</li>
            <li>Ticketing of all the major airlines.</li>
            <li>Worldwide Hotel accommodations</li>
            <li>Tour packages & Car rentals</li>
            <li>Visa assistance</li>
            <li>Travel Insurance</li>
          </ul>
        </div>

        <div>
          <ul className="list-disc list-inside space-y-2 md:mt-10">
            <li>Ticket delivery at door step</li>
            <li>24 hours answering capability</li>
            <li>Visa/Master Card acceptance</li>
          </ul>
        </div>

        <div className="flex md:justify-end justify-center text-center md:text-start items-end ">
          <p className="text-sm">
            Drop us a line
            <br />
            <a href="mailto:sales@travelassist.com" className="hover:underline">
              sales@travelassist.com
            </a>
          </p>
        </div>
      </div>

      <div className="text-center mt-2 text-sm text-white">
        Powered by Structure Int. &copy; 2023
      </div>
    </footer>
  );
}
