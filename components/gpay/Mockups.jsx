import { mockupData } from "@/utils/constant";
import Image from "next/image";
import React from "react";

const MockupCard = ({ title, desc, solution, image, idx }) => {
  return (
    <div
      className={`flex gap-5 xl:gap-10 ${idx % 2 !== 0 && "flex-row-reverse"}`}
    >
      <div className="flex-[1.1]">
        <h4 className="text-[#4767D6] text-2xl font-semibold mt-5">{title}</h4>
        <p className="my-5 xl:text-xl">{desc}</p>
        {solution && (
          <div>
            <h4 className="text-[#4767D6] text-2xl font-semibold mt-10">
              SOLUTION
            </h4>
            <p className="my-5 xl:text-xl">{solution}</p>
          </div>
        )}
      </div>
      <div className="flex-[0.9]">
        <Image
          src={`/projects/${image}`}
          alt="imaze"
          width={300}
          height={300}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

const Mockups = () => {
  return (
    <section className="mt-10 xl:mt-20">
      <h3 className="text-3xl font-semibold">DIGITAL MOCKUPS ON FIGMA</h3>
      <p className="my-5 text-xl">
        Based on the gained insights, I came up with a few design solutions:
      </p>
      <div className="flex flex-col gap-5 mt-5 md:mt-10 lg:mt-14 xl:mt-20 md:gap-10 lg:gap-16 xl:gap-20 2xl:gap-32">
        {mockupData.map((data, idx) => (
          <MockupCard key={data.title} {...data} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Mockups;
