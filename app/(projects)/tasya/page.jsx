import Image from "next/image";
import React from "react";

const Tasya = () => {
  return (
    <section className="pt-20 md:pt-24 bg-[#1A2036] lg:pt-32 xl:pt-40 2xl:text-xl text-white">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-semibold !leading-snug mb-10">
        TASYA : VIRTUAL REALITY MEDITATION
      </h2>
      <Image
        src="/projects/tasya/banner1.webp"
        alt="banner"
        width={1000}
        height={1000}
        className="w-full h-full object-contain drop-shadow-lg lg:mb-10 xl:mb-20 md:mb-0"
      />
      <div className="grid md:grid-cols-5 gap-10 p-10">
        <div className="flex md:col-span-2 justify-center items-center 2xl:text-2xl 2xl:leading-snug">
          Tasya improves mental health management, nurturing mindfulness in
          daily life while fostering imagination and resilience amid life’s
          challenges. It’s more than an app; it’s a path to a centered and
          balanced existence.
        </div>
        <div className="flex md:col-span-3 justify-center items-center text-xl md:text-2xl lg:text-3xl 2xl:text-5xl 2xl:leading-snug font-semibold">
          Tasya blends VR and ancient yogic meditation practices, offering
          tailored sessions and exploration of surreal places.
        </div>
      </div>
      <Image
        src="/projects/tasya/1.png"
        alt="banner"
        width={1000}
        height={1000}
        className="w-full h-full object-contain drop-shadow-lg mb-5 pb-5 xl:mb-20 md:mb-0 xl:pb-20"
      />
      <video autoPlay loop muted>
        <source src="/videos/video1.webm" />
      </video>
      <div className="grid md:grid-cols-5 gap-10 p-10">
        <div className="flex md:col-span-3 justify-center items-center text-xl md:text-2xl lg:text-3xl 2xl:text-5xl  2xl:leading-snug font-semibold">
          Let Tasya guide you to an experience like none other.
        </div>
        <div className="flex md:col-span-2 justify-center items-center">
          Explore the multiverse of your mind.
        </div>
      </div>
      <video autoPlay loop muted>
        <source src="/videos/video2.webm" />
      </video>
      <Image
        src="/projects/tasya/2.png"
        alt="banner"
        width={1000}
        height={1000}
        className="w-full h-full object-contain drop-shadow-lg lg:mb-10 xl:mb-20 md:mb-0 p-5 lg:p-14 xl:p-20"
      />
      <Image
        src="/projects/tasya/3.png"
        alt="banner"
        width={1000}
        height={1000}
        className="w-full h-full object-contain drop-shadow-lg lg:mb-10 xl:mb-20 md:mb-0 p-5 lg:p-14 xl:p-20"
      />
    </section>
  );
};

export default Tasya;
