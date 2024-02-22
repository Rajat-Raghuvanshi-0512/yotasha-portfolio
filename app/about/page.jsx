import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="h-screen flex items-center pr-10 md:pr-14 lg:pr-20 xl:pr-24 2xl:pr-40 gap-5 md:gap-10 lg:gap-14 xl:gap-20 2xl:gap-24">
      <div className="flex-[0.8]">
        <Image src="/me.png" alt="me" height={500} width={500} />
      </div>
      <div className="flex-[1.2]">
        <h3 className="text-orange-base font-bold text-3xl md:text-4xl lg:text-5xl">
          About me
        </h3>
        <p className="my-5 lg:my-8">
          Hi there, I&apos;m Yotasha! I’m a UI UX Designer, and a Digital
          Illustration Artist.
        </p>
        <h6 className="text-orange-base mb-3">Professional life</h6>
        <p>
          I have been working at a tech service-based startup as a Lead UX
          Designer since December 2023. Here, I play a multi-hyphenated role as
          a sole designer, people manager, graphic designer, and even train two
          design interns.
        </p>
        <p>
          I am currently also taking a Google Course in User Experience Design
          and working as a freelance digital and traditional artist. During my
          college, I studied English, Cultural Studies, Psychology and gained
          valuable research experience in the fields of Cultural Studies,
          Digital Humanities, and Human-Computer Interaction. The skill set
          gained from this experience has proved to be an asset, especially in
          conducting UX Research.
        </p>
        <h6 className="text-orange-base mt-10 mb-3">Personal life</h6>
        <p>
          I like all things artsy craftsy and get involved increasingly
          complicated creative hobbies (most recent: polymer clay art and
          crochet). An attitude of “I Can Make That!” has led to me explore
          countless creative arenas and inspired me to learn and grow
          constantly.
        </p>
      </div>
    </section>
  );
};

export default About;
