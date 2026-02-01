import React, { useState } from "react";
import TopBar from "./TopBar";
import { NavLink } from "react-router";
import { FaRegUser, FaBars } from "react-icons/fa";
import Search from "./Search";
import { BsCart } from "react-icons/bs";
import CartDrawer from "./CartDrawer";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navigations = [
    { name: "Home", path: "/" },
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
    { name: "Top Wear", path: "/top-wear" },
    { name: "Bottom Wear", path: "/bottom-wear" },
  ];

  return (
    <div className="sticky top-0 z-2 bg-white border-b border-gray-200 ">
      <TopBar />

      {/* Main Header */}
      <div className="w-full md:container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-bold text-xl">Webbuzz</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5">
          {navigations.map((nav, i) => (
            <NavLink
              key={i}
              to={nav.path}
              className="uppercase font-secondary font-light"
            >
              {nav.name}
            </NavLink>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <FaRegUser className="h-5 w-5 cursor-pointer" />

          {/* Cart */}
          <div
            onClick={() => setOpenDrawer(true)}
            className="relative cursor-pointer"
          >
            <BsCart className="h-5 w-5" />
            <span className="absolute bg-primary text-sm text-[#e1b12c] -top-2 -right-3 rounded-full px-2">
              0
            </span>
          </div>

          {/* Search (hide on very small if needed) */}
          <div className="hidden sm:block">
            <Search />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="flex flex-col justify-between w-6 h-5 "
            >
              <span
                className={`w-full h-1 bg-black rounded transition-transform ${mobileMenu ? "rotate-45 translate-y-3" : "rotate-0"}`}
              ></span>
              <span
                className={`w-full h-1 bg-black rounded transition-opacity ${mobileMenu ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`w-full h-1 bg-black rounded transition-transform ${mobileMenu ? "-rotate-45 -translate-y-3" : "rotate-0"}`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenu && (
        <div className="md:hidden transition-all duration-300 bg-white border-y border-gray-200">
          <div className="flex flex-col gap-3 px-4 py-4">
            {navigations.map((nav, i) => (
              <NavLink
                key={i}
                to={nav.path}
                onClick={() => setMobileMenu(false)}
                className="uppercase font-secondary font-light"
              >
                {nav.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer
        openDrawer={openDrawer}
        handleDrawerToggle={() => setOpenDrawer(false)}
      />
    </div>
  );
};

export default Header;
