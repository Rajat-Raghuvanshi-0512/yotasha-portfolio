import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="border-b-orange-base border border-opacity-40 py-4 px-14 justify-between flex fixed w-full left-0 top-0 bg-white shadow-lg shadow-orange-base/10 z-10">
      <Image src="/logo.png" alt="logo" width={40} height={40} />
      <ul className="flex gap-5 md:gap-7 lg:gap-10 font-medium text-orange-dark items-center">
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/resume">resume</Link>
        </li>
        <li>
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
