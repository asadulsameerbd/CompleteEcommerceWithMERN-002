import React from "react";
import { FaInstagram, FaPhoneVolume } from "react-icons/fa";
import { RiMetaFill } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className=" md:container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4  gap-5 py-10 border-y border-gray-200 m-3">
        {/* col1 */}
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold pb-3">Newsletter</h1>
          <p className="text-gray-700 text-sm">
            Be the first to hear about new Products, exclusive events and online
            offers.
          </p>
          <p className="lg:text-lg ">
            Sign up and get 10% off your first order
          </p>

          <form className="flex items-center w-full">
            <input
              className="outline-none min-w-0 border border-gray-300 px-2 py-2 flex-1"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="bg-btn cursor-pointer text-white hover:bg-white hover:text-secondary border border-secondary p-2 "
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* col2 */}
        <div>
          <h1 className="text-2xl font-semibold pb-6">Shop</h1>
          <ul className="space-y-3 text-gray-700">
            <li className="hover:text-secondary">
              <a href="/mens">Men's Top Wear</a>
            </li>
            <li className="hover:text-secondary">
              <a href="/womens">Women's Top Wear</a>
            </li>
            <li className="hover:text-secondary">
              <a href="/mens">Men's Bottom Wear</a>
            </li>
            <li className="hover:text-secondary">
              <a href="/womens">Women's Bottom Wear</a>
            </li>
          </ul>
        </div>

        {/* col 3 */}
        <div>
          <h1 className="text-2xl font-semibold pb-6">Support</h1>
          <ul className="space-y-3 text-gray-700">
            <li className="hover:text-secondary">
              <a href="/contact">Contact Us</a>
            </li>
            <li className="hover:text-secondary">
              <a href="/about">About Us</a>
            </li>
            <li className="hover:text-secondary">
              <a href="/faqs">FAQs</a>
            </li>
            <li className="hover:text-secondary">
              <a href="/features">Features</a>
            </li>
          </ul>
        </div>

        {/* col 4 */}
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold pb-6">Follow Us</h1>

          {/* social */}
          <div className="flex gap-4">
            <span>
              <a href="">
                <RiMetaFill className="h-5 w-5 hover:text-secondary hover:-translate-y-1 transition duration-200" />
              </a>
            </span>
            <span>
              <a href="">
                <FaInstagram className="h-5 w-5 hover:text-secondary hover:-translate-y-1 transition duration-200" />
              </a>
            </span>
            <span>
              <a href="">
                <TfiTwitter className="h-5 w-5 hover:text-secondary hover:-translate-y-1 transition duration-200" />
              </a>
            </span>
          </div>

          <h1 className=" text-gray-600 pt-4">Call Us</h1>
          <div className="flex gap-3">
            <span>
              <FaPhoneVolume className="h-5 w-5" />
            </span>
            <p className="">012-345-6789</p>
          </div>
        </div>
      </div>

      <p className="text-center text-sm py-6 text-gray-500">
        ©-2025-Webbuzz. All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
