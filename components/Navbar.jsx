"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Drawer from "./Drawer";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="border-b-orange-base border border-opacity-40 py-2 px-5 md:py-4  md:px-14 justify-between flex fixed w-full left-0 top-0 bg-white shadow-lg shadow-orange-base/10 z-10">
      <Link href="/">
        <Image
          src="/logo.webp"
          alt="logo"
          width={40}
          height={40}
          className="w-10 h-10 object-contain md:w-14 md:h-14"
        />
      </Link>
      <Image
        src="/burger-menu.png"
        alt="menu"
        width={20}
        height={20}
        className="md:hidden object-contain"
        onClick={() => setIsOpen(true)}
      />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <ul className="gap-5 font-medium text-center text-orange-dark text-xl items-center h-full justify-center md:hidden flex flex-col">
          <li>
            <Link
              className={
                pathname === "/"
                  ? "underline drop-shadow-md text-orange-base shadow-orange-dark underline-offset-8"
                  : ""
              }
              href="/"
              onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
            >
              contact
            </Link>
          </li>
        </ul>
      </Drawer>
      <ul className="gap-5 md:gap-7 lg:gap-10 font-medium text-orange-dark items-center hidden md:flex 2xl:text-xl">
        <li>
          <Link
            className={
              pathname === "/"
                ? "underline drop-shadow-md text-orange-base shadow-orange-dark underline-offset-8"
                : ""
            }
            href="/"
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
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
