import React from "react";
import { hero_person } from "../../constants";

const Hero = () => {
  return (
    <div className="w-full padding-container flex flex-row relative z-10 min-h-screen items-center sm:pt-0">
      <div className=" absolute left-0 w-[60%] h-full z-10 bg-gradient-to-r from-primary via-primary to-transparent" />
      <div className="family-bg">
        <div className=" h-full w-full bg-black/20" />
      </div>

      <div className="max_width z-20 w-full mt-32 sm:mt-0 my-20">
        <div className="flex flex-col w-full lg:w-1/2 gap-10">
          <div className="flex flex-col gap-5">
            <p className="poppins text-6xl text-white textShadow max-w-[700px]">
              Insurance for workers covered in minutes
            </p>
            <p className=" text-white text-xl w-full md:w-[70%] textShadow">
              Discover ideal insurance plans tailored to your needs
              effortlessly. Let us be your guide.
            </p>
          </div>

          <div className="btn bg-secondary w-fit hover:cursor-pointer">
            <p className=" text-white"> Find your plan</p>
          </div>

          <div className="flex flex-row items-center flex-wrap gap-5">
            <div className="flex flex-row">
              {hero_person.map((person, i) => (
                <img
                  key={person}
                  src={person}
                  alt="person"
                  className={`rounded-full h-[60px] w-[60px] object-cover border-2 border-white ${
                    i > 0 ? "-ml-5" : ""
                  }`}
                />
              ))}
            </div>

            <p className=" text-white text-xl w-[70%] textShadow max-w-[280px]">
              Transforming lives and easing daily task for millions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
