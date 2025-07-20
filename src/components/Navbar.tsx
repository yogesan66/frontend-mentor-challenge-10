import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-menu-close.svg";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navItems = ["Home", "New", "Popular", "Trending", "Categories"];
  return (
    <div>
      <nav className="flex justify-between items-center w-full">
        <img src={logo} alt="logo" />
        <ul className="hidden md:flex text-darkGrayishBlue gap-6 md:gap-10">
          {navItems.map((item, index) => (
            <li
              className="cursor-pointer hover:text-softRed duration-200 transition-all"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
        <img
          className="block md:hidden"
          src={menu}
          alt="menu-icon"
          onClick={() => setOpen(true)}
        />
      </nav>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 z-50 bg-offWhite h-full w-2/3 max-w-xs shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <img
            src={close}
            alt="close-icon"
            className=" cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
        <ul className="flex flex-col gap-6 p-6 text-veryDarkBlue text-xl mt-8">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-softRed transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
