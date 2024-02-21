import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="border-b-orange-base border border-opacity-40 py-4 px-14 justify-between flex">
      <Image src="/logo.png" alt="logo" width={40} height={40} />
      <ul className="flex gap-5 md:gap-7 lg:gap-10 font-medium text-orange-dark items-center">
        <li>about</li>
        <li>resume</li>
        <li>contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
