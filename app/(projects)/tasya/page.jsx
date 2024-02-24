import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="m-5 md:m-10 mt-20 md:mt-24 xl:mx-20 2xl:mx-40 lg:mt-32 xl:mt-40 px-10 lg:px-20 2xl:text-xl">
      <h2 className="text-[#505A63] text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-semibold !leading-snug mb-10">
        TASYA : VIRTUAL REALITY MEDITATION{" "}
        <span className="text-orange-base text-3xl">(Coming Soon)</span>
      </h2>
      <Image
        src="/projects/tasya-banner.webp"
        alt="banner"
        width={1000}
        height={1000}
        className="w-full h-full object-contain rounded-3xl border-gray-200 border drop-shadow-lg"
      />
    </section>
  );
};

export default page;
