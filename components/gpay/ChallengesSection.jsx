import Image from "next/image";
import React from "react";

const ChallengesSection = ({ titleStyle = "", subHeadingStyles = "" }) => {
  return (
    <div className="mt-10 xl:mt-20">
      <div className="flex gap-10">
        <div className="flex-1">
          <Image
            src="/projects/gpay2.webp"
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
  );
};

export default ChallengesSection;
