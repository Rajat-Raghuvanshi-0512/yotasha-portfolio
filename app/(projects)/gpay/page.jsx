import { personas } from "@/utils/constant";
import Image from "next/image";
import React from "react";
const PersonaCard = ({ name, bg, tech, challenge, needs, image }) => {
  return (
    <div className="border border-gray-300 rounded-xl px-5 py-10 flex gap-5 drop-shadow-md bg-white/80 hover:scale-95 duration-300">
      <div className="flex-[0.6]">
        <Image
          src={`/projects/personas/${image}`}
          alt="persona"
          width={100}
          height={100}
          className={"w-full h-full object-contain object-top"}
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
  const designCardStyle =
    "bg-[#ddebf7] rounded-lg text-center h-40 flex items-center justify-center text-2xl capitalize p-5 drop-shadow border-blue-200 border";
  return (
    <section className="m-5 md:m-10 mt-20 md:mt-24 xl:mx-20 2xl:mx-40 lg:mt-32 xl:mt-40 px-10 lg:px-20 2xl:text-xl">
      <div className="flex gap-5">
        <div className="flex-1 mr-14">
          <h1 className="text-[#4767D6] text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold !leading-normal -mr-32">
            GOOGLE PAY FOR SENIORS
          </h1>
          <div>
            <h4 className="text-[#4767D6]">Context</h4>
            <p>
              The idea of this hypothetical project came to my mind when I saw
              my grandfather ask my brother to make a UPI payment that he seemed
              to be struggling with. So I imagined a Google Pay, but designed
              specifically for seniors who don’t necessarily speak English. This
              app could bridge the language barrier, simplify interfaces, and
              prioritize core financial tasks. The benefits? Empowerment,
              inclusion, and a potentially untapped market.{" "}
            </p>
            <h4 className={titleStyle}>Time Frame</h4>
            <p>6 weeks</p>
            <h4 className={titleStyle}>Role</h4>
            <p>Sole Designer</p>
            <h4 className={titleStyle}>Involvement</h4>
            <p>
              UX Design, User Research, Empathy, Ideation, User Interface
              Design, Usability Testing
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/projects/gpay1.png"
            alt="gpay1"
            width={450}
            height={450}
            className="hover:scale-110 duration-500 origin-top-left"
          />
        </div>
      </div>
      <div className="mt-10 xl:mt-20">
        <div className="flex gap-10">
          <div className="flex-1">
            <Image
              src="/projects/gpay2.png"
              alt="gpay1"
              width={450}
              height={450}
              className="drop-shadow-xl rounded-lg hover:scale-110 duration-500 origin-top-right"
            />
          </div>
          <div className="flex-1">
            <h3 className={subHeadingStyles}>CHALLENGES</h3>
            <p className="my-4">
              GooglePay offers convenience and security, but it&apos;s true that
              some older adults might find it challenging to use. Here are some
              potential reasons:
            </p>
            <div className="flex justify-between">
              <div>
                <h4 className={titleStyle}>Technological barriers:</h4>
                <ul className="list-disc ml-5 mt-2">
                  <li>Unfamiliarity with smartphones</li>
                  <li>Vision and dexterity issues</li>
                  <li>Security concerns</li>
                  <li>Linguistic Barriers</li>
                </ul>
              </div>
              <div>
                <h4 className={titleStyle}>Personal preferences:</h4>
                <ul className="list-disc ml-5 mt-2">
                  <li>Privacy concerns</li>
                  <li>Habit and comfort</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            Population in Rural India&rdquo; by International Journal of
            Research in Social Science (2019)
          </li>
          <li>
            •&ldquo;An Analysis of Unified Payments Interface (UPI) Transactions
            in India&rdquo; by The Clearing Corporation of India Limited (2021):
          </li>
          <li>•Other reports by Digital Empowerment Foundation and NPCI</li> 
        </ul>
        <h4 className="my-5 font-semibold text-xl">PRIMARY RESEARCH</h4>
        <p>
          I conducted User Interviews on a sample of 5 users ranging from the
          age of 48 to 76. These included 3 females and 2 males across various
          educational levels from High School Diploma to PhD. The following
          insights were gained:
        </p>
      </div>
      <div className="flex justify-between items-center mt-10 xl:mt-20">
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
            src="/projects/gpay3.png"
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
      <div className={`mt-10 xl:mt-20`}>
        <h3 className={subHeadingStyles}>USER PERSONAS</h3>
        <div className="grid grid-cols-2 gap-5 xl:gap-10 mt-5">
          {personas.map((persona) => (
            <PersonaCard key={persona.name} {...persona} />
          ))}
        </div>
      </div>
      <div className="mt-10 xl:mt-20">
        <h3 className={subHeadingStyles}> IDEATHON & DESIGN</h3>
        <h4 className="my-5">HOW MIGHT WE:</h4>
        <div className="grid grid-cols-3 gap-5 xl:gap-8">
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
        <div className="grid grid-cols-2 gap-5 xl:gap-8">
          <Image
            src={"/projects/wireframe1.png"}
            alt="wireframe"
            width={200}
            height={200}
            className="w-full h-[400px] first object-contain bg-gray-200 drop-shadow-lg border-gray-300 border rounded-3xl duration-500"
          />
          <Image
            src={"/projects/wireframe2.png"}
            alt="wireframe"
            width={200}
            height={200}
            className="w-full h-[400px] object-contain second bg-gray-200 drop-shadow-lg border-gray-300 border rounded-3xl duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Gpay;
