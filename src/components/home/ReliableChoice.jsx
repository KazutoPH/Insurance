import React from "react";
import { insurance_solution_list } from "../../constants";
import { NavLink } from "react-router-dom";

const ReliableChoice = () => {
  return (
    <div className="bg-white padding-container">
      <div className="max_width content-container w-full flex flex-col gap-20">
        <div className="flex flex-col mx-auto items-center gap-3">
          <p className=" text-primary text-lg font-semibold">RELIABLE CHOICE</p>
          <p className="text-primary text-center text-5xl poppins font-semibold max-w-[700px] leading-tight">
            A reliable choice for
            <span className="text-secondary"> tailored</span> insurance solution
          </p>

          <p className=" text-black/50 text-lg font-medium max-w-[500px] text-center">
            Discover the assurance of expert guidance, personalized service, and
            dedicated support for your insurance needs.
          </p>
        </div>

        <div className="flex flex-row gap-10">
          {insurance_solution_list.map((data, i) => (
            <div className="whiteContainer flex-col gap-5" key={i}>
              <p className="text-primary text-2xl font-semibold poppins">
                {data.name}
              </p>
              <p className=" text-lg text-black/50 font-medium">
                {data.description}
              </p>
              <NavLink to="/">
                <p className=" text-lg text-primary font-semibold">
                  Learn more
                </p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReliableChoice;
