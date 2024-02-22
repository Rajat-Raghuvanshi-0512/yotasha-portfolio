import Image from "next/image";
import React from "react";

const Gpay = () => {
  return (
    <section className="m-10 mt-20 md:mt-24 xl:mx-20 2xl:mx-40 lg:mt-32 xl:mt-40 px-20">
      <div className="flex gap-5">
        <div className="flex-1 mr-14">
          <h1 className="text-[#4767D6] text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold !leading-normal -mr-32">
            GOOGLE PAY FOR SENIORS
          </h1>
          <div>
            <h4 className="text-[#4767D6]">Context</h4>
            <p>
              The idea of this hypothetical project came to my mind when I saw
              my grandfather ask my brother to make a UPI payment that he seemed
              to be struggling with. So I imagined a Google Pay, but designed
              specifically for seniors who don’t necessarily speak English. This
              app could bridge the language barrier, simplify interfaces, and
              prioritize core financial tasks. The benefits? Empowerment,
              inclusion, and a potentially untapped market.{" "}
            </p>
            <h4 className="text-[#4767D6] mt-5">Time Frame</h4>
            <p>6 weeks</p>
            <h4 className="text-[#4767D6] mt-5">Role</h4>
            <p>Sole Designer</p>
            <h4 className="text-[#4767D6] mt-5">Involvement</h4>
            <p>
              UX Design, User Research, Empathy, Ideation, User Interface
              Design, Usability Testing
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/projects/gpay1.png"
            alt="gpay1"
            width={450}
            height={450}
          />
        </div>
      </div>
      <div className="mt-10 xl:mt-20">
        <div className="flex">
          <div className="flex-1">
            <Image
              src="/projects/gpay2.png"
              alt="gpay1"
              width={450}
              height={450}
            />
          </div>
          <div className="flex-1">
            <h3>CHALLENGES</h3>
            <p>
              GooglePay offers convenience and security, but it&apos;s true that
              some older adults might find it challenging to use. Here are some
              potential reasons:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gpay;
