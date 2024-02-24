import React from "react";

const FinalDesigns = ({ subHeadingStyles }) => {
  return (
    <>
      <div className="mt-10 xl:mt-20">
        <h3 className={subHeadingStyles}>FINAL DESIGNS</h3>
        <div className="grid grid-cols-3 gap-5 md:gap-10 lg:gap-14 mt-5 lg:mt-8 xl:mt-10">
          <div className="bg-gray-200 font-bold text-xl rounded-lg border border-gray-300 drop-shadow-lg flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px] w-full animate-pulse">
            Coming soon...
          </div>
          <div className="bg-gray-200 font-bold text-xl rounded-lg border border-gray-300 drop-shadow-lg flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px] w-full animate-pulse">
            Coming soon...
          </div>
          <div className="bg-gray-200 font-bold text-xl rounded-lg border border-gray-300 drop-shadow-lg flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px] w-full animate-pulse">
            Coming soon...
          </div>
        </div>
      </div>
      <div className="mt-10 xl:mt-20">
        <h3 className={subHeadingStyles}>VISUAL DESIGN SYSTEM</h3>
        <p className="xl:text-xl my-5">
          For this project, I stuck to the original design system of the Google
          Ecosystem. The resources used too were taken from Google’s Open Design
          System: Material Design.{" "}
        </p>
        <a
          href="https://m3.material.io"
          className="text-[#4767D6] xl:text-xl underline"
          target="_blank"
        >
          https://m3.material.io/
        </a>
      </div>
    </>
  );
};

export default FinalDesigns;
