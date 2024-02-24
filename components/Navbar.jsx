"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="border-b-orange-base border border-opacity-40 py-2 px-5 md:py-4  md:px-14 justify-between flex fixed w-full left-0 top-0 bg-white shadow-lg shadow-orange-base/10 z-10">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="w-10 h-10 object-contain md:w-14 md:h-14"
        />
      </Link>
      <ul className="gap-5 md:gap-7 lg:gap-10 font-medium text-orange-dark items-center hidden md:flex 2xl:text-xl">
        <li>
          <Link
            className={
              pathname === "/"
                ? "underline drop-shadow-md text-orange-base shadow-orange-dark underline-offset-8"
                : ""
            }
            href="/"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/about"
                ? "underline drop-shadow-md shadow-orange-dark text-orange-base underline-offset-8"
                : ""
            }
            href="/about"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/resume"
                ? "underline drop-shadow-md shadow-orange-dark text-orange-base underline-offset-8"
                : ""
            }
            href="/resume"
          >
            resume
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/contact"
                ? "underline drop-shadow-md shadow-orange-dark text-orange-base underline-offset-8"
                : ""
            }
            href="/contact"
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
