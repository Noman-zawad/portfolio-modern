"use client";
import { TypewriterEffectSmooth } from "./ui/TypeWritterEffect";
import { BackgroundBeams } from "./ui/BackgroundBeam";

const Banner = () => {
  const words = [
    {
      text: "Noman",
      className: "text-blue-500 dark:text-blue-500 text-lg md:text-7xl",
    },
    {
      text: "E",
      className: "text-blue-500 dark:text-blue-500 text-lg md:text-7xl",
    },
    {
      text: "Jawad",
      className: "text-blue-500 dark:text-blue-500 text-lg md:text-7xl",
    },
  ];
  return (
    <div className="h-[40rem] w-full rounded-md0 relative flex flex-col items-center justify-center antialiased">
      <div className=" mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl text-white text-center font-sans font-bold">
          Hi! I&apos;m{" "}
          <TypewriterEffectSmooth
            words={words}
            cursorClassName="h-24"
            className="justify-center items-center"
          />
        </h1>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Banner;
