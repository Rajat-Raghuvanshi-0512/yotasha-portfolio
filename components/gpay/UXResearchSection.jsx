import React from "react";

const UXResearchSection = ({ subHeadingStyles }) => {
  return (
    <div className="mt-10 xl:mt-20">
      <h3 className={subHeadingStyles}>UX RESEARCH</h3>
      <h4 className="my-5 font-semibold text-xl">SECONDARY RESEARCH</h4>
      <ul className="list-disc ml-5">
        <li>
          &ldquo;Seniors and Digital Payments: Adoption, Usage, and
          Challenges&rdquo; by AARP (2022)
        </li>
        <li>
          •Financial Inclusion of the Elderly Population in India&ldquo; by
          Reserve Bank of India(2020):
        </li>
        <li>
          •&ldquo;Digital Divide and Financial Inclusion: A Study of Elderly
          Population in Rural India&rdquo; by International Journal of Research
          in Social Science (2019)
        </li>
        <li>
          •&ldquo;An Analysis of Unified Payments Interface (UPI) Transactions
          in India&rdquo; by The Clearing Corporation of India Limited (2021):
        </li>
        <li>•Other reports by Digital Empowerment Foundation and NPCI</li> 
      </ul>
      <h4 className="my-5 font-semibold text-xl">PRIMARY RESEARCH</h4>
      <p>
        I conducted User Interviews on a sample of 5 users ranging from the age
        of 48 to 76. These included 3 females and 2 males across various
        educational levels from High School Diploma to PhD. The following
        insights were gained:
      </p>
    </div>
  );
};

export default UXResearchSection;
