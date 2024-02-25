import {
  ChallengesSection,
  FinalDesigns,
  GpayBanner,
  IdeationSection,
  Insights,
  Mockups,
  UXResearchSection,
} from "@/components/gpay";
import { personas } from "@/utils/constant";
import Image from "next/image";
import React from "react";
const PersonaCard = ({ name, bg, tech, challenge, needs, image }) => {
  return (
    <div className="border border-gray-300 rounded-xl px-5 py-10 flex flex-col md:flex-row gap-5 drop-shadow-md bg-white/80 hover:scale-95 duration-300">
      <div className="flex-[0.6] flex items-center justify-center">
        <Image
          src={`/projects/personas/${image}`}
          alt="persona"
          width={100}
          height={100}
          className={
            "w-[150px] h-[150px] md:w-full md:h-full object-contain object-top"
          }
        />
      </div>
      <div className="flex-[1.4]">
        <h4 className="text-xl font-semibold">{name}</h4>
        <ul className="flex flex-col gap-3 mt-5 text-sm">
          <li>- Background: {bg}</li>
          <li>- Technology Experience: {tech}</li>
          <li>- Challenges: {challenge}</li>
          <li>- Needs: {needs}</li>
        </ul>
      </div>
    </div>
  );
};

const Gpay = () => {
  const subHeadingStyles =
    "text-xl lg:text-2xl xl:text-3xl font-semibold text-[#4767D6]";
  const titleStyle = "text-[#4767D6] mt-5";
  return (
    <section className=" md:m-10 mt-20 md:mt-24 xl:mx-20 2xl:mx-40 lg:mt-32 xl:mt-40 px-5 md:px-10 lg:px-20 2xl:text-xl">
      <GpayBanner titleStyle={titleStyle} />
      <ChallengesSection
        titleStyle={titleStyle}
        subHeadingStyles={subHeadingStyles}
      />
      <UXResearchSection subHeadingStyles={subHeadingStyles} />
      <Insights />
      <div className={`mt-10 xl:mt-20`}>
        <h3 className={subHeadingStyles}>USER PERSONAS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 mt-5">
          {personas.map((persona) => (
            <PersonaCard key={persona.name} {...persona} />
          ))}
        </div>
      </div>
      <IdeationSection subHeadingStyles={subHeadingStyles} />
      <Mockups />
      <FinalDesigns subHeadingStyles={subHeadingStyles} />
    </section>
  );
};

export default Gpay;
