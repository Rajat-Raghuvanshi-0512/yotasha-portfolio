import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="my-10 mt-20 lg:mt-32 xl:mt-40">
      <p className="text-orange-base text-4xl lg:text-5xl font-semibold text-center !leading-normal">
        <span className="font-bold">Hi there, I’m Yotasha,</span>
        <br />
        I’m a designer and illustrator.
      </p>
      <div className="flex justify-center items-center mt-5">
        <Image
          src="/banner.png"
          alt="banner"
          width={700}
          height={700}
          className="w-[300px] h-[300px] object-contain md:w-[700px] md:h-[700px]"
        />
      </div>
      <div className="mx-5 md:mx-[10vw] lg:mx-[15vw]" id="projects">
        <div className="flex">
          <div className="flex justify-between w-full">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-orange-base">
              Featured Projects
            </h3>
            <div className="flex gap-3 text-xs md:text-lg">
              <div className="bg-[#E4EAFF] flex justify-center items-center gap-2 rounded-3xl md:py-1 px-2 md:px-4">
                <div className="dot w-2 h-2 md:w-4 md:h-4 bg-[#698AFF] rounded-full"></div>
                <p>Self projects</p>
              </div>
              <div className="bg-[#FFD6F4] flex justify-center items-center gap-2 rounded-3xl md:py-1 px-2 md:px-4">
                <div className="dot w-2 h-2 md:w-4 md:h-4 bg-[#FF46CE] rounded-full"></div>
                <p>Work</p>
              </div>
            </div>
          </div>
        </div>
        <ol className="p-5 md:m-14 flex w-full md:w-auto flex-col gap-3 lg:gap-7 list-decimal text-orange-dark md:text-2xl font-medium lg:text-3xl xl:text-4xl xl:gap-10">
          <li>
            <Link href="/gpay" className="flex justify-between items-center">
              <p>Google Pay for seniors</p>
              <div className="flex gap-3">
                <div className="dot w-4 h-4 bg-[#698AFF] rounded-full"></div>
                <Image
                  src="/arrow.png"
                  alt="arrow"
                  width={20}
                  height={20}
                  className="w-3 h-3 md:w-5 md:h-5 object-contain"
                />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/ycc" className="flex justify-between items-center">
              <p>YCC: Mobile App for parents</p>
              <div className="flex gap-3">
                <div className="dot w-4 h-4 bg-[#FF46CE] rounded-full"></div>
                <Image
                  src="/arrow.png"
                  alt="arrow"
                  width={20}
                  height={20}
                  className="w-3 h-3 md:w-5 md:h-5 object-contain"
                />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/tasya" className="flex justify-between items-center">
              <p>Tasya: Digital Virtual Reality</p>
              <div className="flex gap-3">
                <div className="dot w-4 h-4 bg-[#698AFF] rounded-full"></div>
                <Image
                  src="/arrow.png"
                  alt="arrow"
                  width={20}
                  height={20}
                  className="w-3 h-3 md:w-5 md:h-5 object-contain"
                />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/artwork" className="flex justify-between items-center">
              <p>Some of my artwork</p>
              <div className="flex gap-3">
                <div className="dot w-4 h-4 bg-gradient-to-tr from-[#698AFF] from-40% via-white to-60% to-[#FF46CE] rounded-full"></div>
                <Image
                  src="/arrow.png"
                  alt="arrow"
                  width={20}
                  height={20}
                  className="w-3 h-3 md:w-5 md:h-5 object-contain"
                />
              </div>
            </Link>
          </li>
        </ol>
      </div>
    </section>
  );
}
