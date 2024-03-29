import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <section className="md:m-10 mt-20 md:mt-24 xl:mx-20 2xl:mx-40 lg:mt-32 2xl:mt-40 px-5 md:px-10 lg:px-20 2xl:text-xl lg:pb-10">
      <h2 className="text-orange-base text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold">
        GET IN TOUCH
      </h2>
      <div className="border-[#FFCAC4] border grid grid-cols-1 md:grid-cols-5 mt-10 min-h-[60vh] relative">
        <div className="md:col-span-3 p-5 md:py-8 md:px-10 2xl:py-20 2xl:px-24">
          <h3 className="text-3xl font-semibold text-orange-base drop-shadow">
            Contact Me
          </h3>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-5 mt-10">
              <input
                className="p-3 2xl:p-4 flex-1 rounded border border-[#707070] outline-[#ffcac4]"
                placeholder="Name"
                type="text"
              />
              <input
                className="p-3 2xl:p-4 flex-1 rounded border border-[#707070] outline-[#ffcac4]"
                placeholder="Email"
                type="text"
              />
            </div>
            <input
              className="p-3 2xl:p-4 flex-1 rounded border border-[#707070] outline-[#ffcac4] w-full"
              placeholder="Subject"
              type="text"
            />
            <textarea
              className="p-3 2xl:p-4 flex-1 rounded border border-[#707070] outline-[#ffcac4] w-full resize-none "
              placeholder="Message"
              type="text"
              rows={9}
            />
            <button className="text-white bg-orange-base py-3 rounded hover:scale-95 duration-300">
              Send message
            </button>
          </div>
        </div>
        <div className="md:col-span-2 bg-[#FFCAC4] text-orange-dark py-8 px-10 xl:px-16 xl:py-14 2xl:py-20 2xl:px-24 hidden md:block">
          <div className="flex gap-3 items-center text-lg md:text-3xl lg:text-4xl font-semibold">
            <Image
              src="/logo.webp"
              alt="panda"
              width={30}
              height={30}
              className={`w-5 h-5 object-contain md:w-10 md:h-10`}
            />
            <p>Yotashaw</p>
          </div>
          <div className="mt-3 md:mt-10 font-bold md:ml-5">
            <p className="md:text-xl">Reach Out:</p>
            <div className="flex flex-col font-normal gap-3 md:gap-5 !text-sm md:text-md mt-2 lg:mt-5">
              <div className="flex items-center gap-2">
                <Image src="/mail.webp" alt="panda" width={15} height={15} />
                <p>artwtasha@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/phone.webp" alt="panda" width={15} height={15} />
                <p>+91 81682 12340</p>
              </div>
              <div className="items-center gap-2 hidden md:flex">
                <Image
                  src="/location.webp"
                  alt="panda"
                  width={10}
                  height={10}
                />
                <p>Karnal, Haryana</p>
              </div>
              <Image
                src="/footer.webp"
                alt="panda"
                width={400}
                height={400}
                className="w-[150px] -bottom-7 peer right-14 z-10 absolute h-[150px] md:w-[300px] md:h-[300px] object-contain object-right"
              />
              <Image
                src="/hi.webp"
                alt="hi"
                width={80}
                height={80}
                className="top-[50%] 2xl:top-[60%] opacity-0 peer-hover:opacity-100 absolute duration-300 right-14 z-10 object-contain object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
