import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FFCAC4] text-orange-dark py-5 px-20 flex justify-between items-center">
      <div>
        <div className="flex gap-3 items-center text-3xl lg:text-4xl font-semibold">
          <Image src="/logo.png" alt="panda" width={30} height={30} />
          <p>Yotashaw</p>
        </div>
        <div className="mt-10 font-bold ml-10">
          <p className="text-xl">Let&apos;s Connect:</p>
          <div className="flex font-normal gap-10 text-md mt-2">
            <div className="flex items-center gap-2">
              <Image src="/mail.png" alt="panda" width={20} height={20} />
              <p>artwtasha@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/phone.png" alt="panda" width={20} height={20} />
              <p>+91 81682 12340</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/location.png" alt="panda" width={15} height={15} />
              <p>Karnal, Haryana</p>
            </div>
          </div>
        </div>
      </div>
      <Image src="/footer.png" alt="panda" width={300} height={300} />
    </footer>
  );
};

export default Footer;
