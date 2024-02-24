"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  let bgColor = "bg-[#FFCAC4] text-orange-dark";
  if (pathname === "/gpay") {
    bgColor = "bg-[#D1DBFF] text-[#4767D6]";
  } else if (pathname === "/ycc") {
    bgColor = "bg-[#F5D08A] text-orange-dark";
  }
  return (
    <footer
      className={`${bgColor} p-5 md:px-20 flex justify-between items-center`}
    >
      <div>
        <div className="flex gap-3 items-center text-lg md:text-3xl lg:text-4xl font-semibold">
          <Image
            src="/logo.webp"
            alt="panda"
            width={30}
            height={30}
            className={`${
              pathname === "/gpay" ? "invert" : ""
            } w-5 h-5 object-contain md:w-10 md:h-10`}
          />
          <p>Yotashaw</p>
        </div>
        <div className="mt-3 md:mt-10 font-bold md:ml-10">
          <p className="md:text-xl">Let&apos;s Connect:</p>
          <div className="flex flex-col md:flex-row font-normal gap-3 md:gap-10 !text-sm md:text-md mt-2 lg:mt-5">
            <div className="flex items-center gap-2">
              <Image
                src="/mail.webp"
                alt="panda"
                width={20}
                height={20}
                className={pathname === "/gpay" ? "invert" : ""}
              />
              <p>artwtasha@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/phone.webp"
                alt="panda"
                width={20}
                height={20}
                className={pathname === "/gpay" ? "invert" : ""}
              />
              <p>+91 81682 12340</p>
            </div>
            <div className="items-center gap-2 hidden md:flex">
              <Image
                src="/location.webp"
                alt="panda"
                width={15}
                height={15}
                className={pathname === "/gpay" ? "invert" : ""}
              />
              <p>Karnal, Haryana</p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/footer.webp"
        alt="panda"
        width={300}
        height={300}
        className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] object-contain object-right"
      />
    </footer>
  );
};

export default Footer;
