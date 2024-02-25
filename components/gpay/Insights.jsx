import Image from "next/image";
import React from "react";

const Insights = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-10 xl:mt-20">
        <div>
          <h3 className="text-xl font-bold">KEY INSIGHTS</h3>
          <ul className="list-disc ml-5 xl:ml-10 mt-4">
            <li>Focus on accessibility of the design</li>
            <li>Simplification of the process</li>
            <li>Validate security concerns</li>
            <li>Inclusion of more Local Languages</li>
          </ul>
        </div>
        <div>
          <Image
            src="/projects/gpay3.webp"
            alt="gpay3"
            width={400}
            height={400}
            className="drop-shadow-xl rounded-lg hover:scale-110 duration-500 origin-left"
          />
        </div>
      </div>
      <div className="mt-10">
        <p className="text-[#3752B1] text-xl">
          Additionally, creating a different app for people of a certain age
          group may be stigmatizing and further the digital divide that we aim
          to bridge. <br /> Therefore, creating design solutions that offer
          accessibility that is scalable to all users may be helpful to
          consider. 
        </p>
        <h4 className="text-xl font-semibold mt-10 mb-5">OTHER INSIGHTS</h4>
        <p>
          •Include in-app tutorials to help theusers (basedon the suggestion
          Digital Empowerment Foundation) •Considering integration with
          existingpension or social security schemes (based on suggestion from
          NCPI)
        </p>
      </div>
    </>
  );
};

export default Insights;
