import Image from "next/image";
import React from "react";

const GpayBanner = ({ titleStyle }) => {
  return (
    <div className="flex gap-5">
      <div className="flex-1 mr-14">
        <h1 className="text-[#4767D6] text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold !leading-normal -mr-32">
          GOOGLE PAY FOR SENIORS
        </h1>
        <div>
          <h4 className="text-[#4767D6]">Context</h4>
          <p>
            The idea of this hypothetical project came to my mind when I saw my
            grandfather ask my brother to make a UPI payment that he seemed to
            be struggling with. So I imagined a Google Pay, but designed
            specifically for seniors who don’t necessarily speak English. This
            app could bridge the language barrier, simplify interfaces, and
            prioritize core financial tasks. The benefits? Empowerment,
            inclusion, and a potentially untapped market.{" "}
          </p>
          <h4 className={titleStyle}>Time Frame</h4>
          <p>6 weeks</p>
          <h4 className={titleStyle}>Role</h4>
          <p>Sole Designer</p>
          <h4 className={titleStyle}>Involvement</h4>
          <p>
            UX Design, User Research, Empathy, Ideation, User Interface Design,
            Usability Testing
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <Image
          src="/projects/gpay1.webp"
          alt="gpay1"
          width={450}
          height={450}
          className="hover:scale-110 duration-500 origin-top-left 2xl:w-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default GpayBanner;
