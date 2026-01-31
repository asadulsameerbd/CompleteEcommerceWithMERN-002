import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const CartDrawer = ({ openDrawer, handleDrawerToggle }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${openDrawer ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* close btn */}
      <div className="flex justify-end p-4">
        <button onClick={handleDrawerToggle}>
          <IoCloseSharp className="w-6 h-6 cursor-pointer" />
        </button>
      </div>

      {/* cart content with scrollable area */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h1 className="font-bold text-3xl  border-b pb-4 border-gray-200">
          Cart
        </h1>

        {/* Component for cart contents */}
      </div>

      {/* Checkout Button Fixed at the bottom */}
      <div className=" p-4 bg-white bottom-0 sticky">
        <button className="w-full p-3 rounded-lg cursor-pointer font-secondary hover:bg-white hover:text-secondary hover:border transition-all duration-300 text-white bg-btn">
          Checkout
        </button>
        <p className="text-sm tracking-tight mt-2 text-center">
          Shipping, Taxes and discount codes Calculated at Checkout
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
