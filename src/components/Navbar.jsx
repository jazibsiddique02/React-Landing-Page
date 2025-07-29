import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between h-24 max-w-[1294px] mx-auto px-4 items-center ">
      <h1 className="w-full font-bold text-3xl text-[#00df9a]">React.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="cursor-pointer block md:hidden">
        {!nav ? <MdClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>

      {/* mobile navbar */}
      <div
        className={
          !nav
            ? "fixed bg-[#000300] block md:hidden top-0 left-0 w-[60%] border-r border-r-gray-900 h-full ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full font-bold text-3xl text-[#00df9a] m-4">React.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
