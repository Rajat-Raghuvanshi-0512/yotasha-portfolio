import Image from "next/image";
import React from "react";

const IdeationSection = ({ subHeadingStyles }) => {
  const designCardStyle =
    "bg-[#ddebf7] rounded-lg text-center h-40 flex items-center justify-center md:text-2xl capitalize p-2 md:p-5 drop-shadow border-blue-200 border";
  return (
    <div className="mt-10 xl:mt-20">
      <h3 className={subHeadingStyles}> IDEATION & DESIGN</h3>
      <h4 className="my-5">HOW MIGHT WE:</h4>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8">
        <div className={designCardStyle}>Family member assistance</div>
        <div className={designCardStyle}>Voice activation</div>
        <div className={designCardStyle}>Pre-selecting merchants</div>
        <div className={designCardStyle}>AI assistance</div>
        <div className={designCardStyle}>Community based support</div>
        <div className={designCardStyle}>
          Dummy transactions for practice and confidence building
        </div>
      </div>
      <h4 className="my-5 mt-10">PAPER WIREFRAMING:</h4>
      <div className="grid md:grid-cols-2 gap-5 xl:gap-8">
        <Image
          src={"/projects/wireframe1.webp"}
          alt="wireframe"
          width={200}
          height={200}
          className="w-full h-[400px] first object-contain bg-gray-200 drop-shadow-lg border-gray-300 border rounded-3xl duration-500"
        />
        <Image
          src={"/projects/wireframe2.webp"}
          alt="wireframe"
          width={200}
          height={200}
          className="w-full h-[400px] object-contain second bg-gray-200 drop-shadow-lg border-gray-300 border rounded-3xl duration-500"
        />
      </div>
    </div>
  );
};

export default IdeationSection;
