import Image from "next/image";
import React from "react";

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <div
      className={
        " fixed overflow-hidden z-10 bg-opacity-25 top-0 right-0 shadow drop-shadow-sm h-screen transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " max-w-lg right-0 absolute w-[80%] bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-full pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-4 font-bold text-3xl text-orange-dark flex gap-5">
            <Image
              src="/logo.webp"
              alt="logo"
              width={25}
              height={25}
              className="object-contain"
            />
            <p>Yotashaw</p>
          </header>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </div>
  );
}
