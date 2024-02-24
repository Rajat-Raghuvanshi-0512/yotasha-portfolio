import Image from "next/image";
import React from "react";

const ArtWork = () => {
  return (
    <section className="m-5 md:m-10 mt-20 md:mt-24 xl:mx-20 2xl:mx-40 lg:mt-32 xl:mt-40 px-10 lg:px-20 2xl:text-xl">
      <h2 className="text-orange-base text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold">
        SOME ILLUSTRATIONS
      </h2>
      <Image
        src="/projects/illustrations.webp"
        alt="banner"
        width={1000}
        height={1000}
        className="w-full h-full object-contain p-10 drop-shadow-lg"
      />
    </section>
  );
};

export default ArtWork;
