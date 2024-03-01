import Carousel from "@/components/Carousel";
import YccBanner from "@/components/ycc/Banner";
import Tests from "@/components/ycc/Tests";
import Image from "next/image";
import React from "react";

const wireframes = [
  "wf1.webp",
  "wf2.webp",
  "wf3.webp",
  "wf4.webp",
  "wf5.webp",
  "wf6.webp",
];

const mockups = [
  "/projects/mockups/m1.webp",
  "/projects/mockups/m2.webp",
  "/projects/mockups/m3.webp",
  "/projects/mockups/m4.webp",
  "/projects/mockups/m5.webp",
  "/projects/mockups/m6.webp",
  "/projects/mockups/m7.webp",
  "/projects/mockups/m8.webp",
  "/projects/mockups/m9.webp",
];

const YccPage = () => {
  return (
    <section className=" md:m-10 mt-20 md:mt-24 xl:mx-20 2xl:mx-40 lg:mt-32 xl:mt-40 px-5 md:px-10 lg:px-20 2xl:text-xl">
      <YccBanner />
      <div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-center text-orange-dark font-semibold mt-10 md:mt-20 lg:mt-24">
          WIREFRAMES PROVIDED TO ME
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 my-10 flex-wrap justify-center">
          {wireframes.map((wf) => (
            <Image
              key={wf}
              src={`/projects/wireframes/${wf}`}
              alt="wf"
              width={300}
              height={300}
              className="w-full h-full"
            />
          ))}
        </div>
      </div>
      <div className="my-10 md:my-20 lg:my-24">
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-center text-orange-dark font-semibold">
          INITIAL MOCKUPS
        </h3>
        <div className="md:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 my-10 flex-wrap justify-center hidden ">
          {mockups.map((mockup) => (
            <Image
              key={mockup}
              src={mockup}
              alt="wf"
              width={300}
              height={300}
              className="w-full h-full"
            />
          ))}
        </div>
        <Carousel className="md:hidden" images={mockups} />
      </div>
      <Tests />
      <h3 className="text-orange-dark font-semibold text-2xl lg:text-3xl my-5 md:my-10">
        FINAL DESIGNS
      </h3>
      <h3 className="text-orange-dark font-semibold text-2xl lg:text-3xl my-5 md:my-10">
        VISUAL SYSTEM
      </h3>
      <h3 className="text-orange-dark font-semibold text-2xl lg:text-3xl my-5 md:my-10">
        REFLECTIONS
      </h3>
      <p className=" xl:text-xl">
        This was my first project where I worked with a large team and it was a
        fun collaborative project. My focus for this project was User Interface
        Design and initially, I wanted to make everything really fancy and add a
        lots of animations and transitions, but the more I got to explore the
        workings of design, I started to value more plain and simplistic designs
        that are centered around the user. I also got to interact with the
        Development Team and discuss plausible features that aligned with the
        time and budget of the project.
      </p>
    </section>
  );
};

export default YccPage;
