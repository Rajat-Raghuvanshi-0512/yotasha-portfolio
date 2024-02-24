import Image from "next/image";
import React from "react";

const YccBanner = () => {
  return (
    <section>
      <div className="flex">
        <div className="flex-1">
          <h1 className="text-orange-base text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold !leading-normal">
            YCC : MOBILE APP FOR PARENTS
          </h1>

          <h6 className="text-orange-dark font-medium mt-5">Context</h6>
          <p>
            To create a friendly and visually pleasing User Interface for a
            coaching center’s mobile application. The aim of the app was for
            parents to receive notifications and test reports of their children.
          </p>

          <h6 className="text-orange-dark font-medium mt-5">Brand Colors</h6>
          <p>Yellow and Red</p>
          <h6 className="text-orange-dark font-medium mt-5">Time Frame </h6>
          <p>5 days (7 Jan 2022 to 11 Jan 2022)</p>
          <h6 className="text-orange-dark font-medium mt-5">Role</h6>
          <p>UI Designer, Usability Researcher</p>
          <h6 className="text-orange-dark font-medium mt-5">Involvement </h6>
          <p>Mobile Interface Design, Usability Testing</p>
        </div>
        <div className="flex-1">
          <Image
            src="/projects/ycc-banner.png"
            alt="banner"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default YccBanner;
