import { testsData } from "@/utils/constant";
import Image from "next/image";
import React from "react";

const Tests = () => {
  return (
    <section>
      <h3 className="text-orange-dark font-semibold text-2xl lg:text-3xl my-5 md:my-10">
        USABILITY TEST INSIGHTS
      </h3>
      <p className="text-xl">
        Upon conducting a usability test on 5 users across different age groups
        raging from 14 to 50 years old, the following changes were made:
      </p>
      <div className="flex flex-col gap-10">
        {testsData.map((data, idx) => (
          <div
            key={data.problem}
            className={`flex gap-5 md:gap-10 flex-col ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="flex-1">
              <h4 className="text-orange-base text-xl md:text-2xl font-semibold mt-5 mb-2 xl:mt-8 lg:mb-5">
                {idx + 1}. PROBLEM:
              </h4>
              <p>{data.problem}</p>
              <h4 className="text-orange-base text-xl md:text-2xl font-semibold mt-5 mb-2 xl:mt-8 lg:mb-5">
                SOLUTION:
              </h4>
              <p>Select Student dropdown option at the dashboard</p>
            </div>
            <div className="flex-1">
              <Image
                src={`/projects/${data.image}`}
                alt="test"
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tests;
