import React from "react";
import { insurance_solution_list } from "../../constants";
import { NavLink } from "react-router-dom";
import Title from "../Title";
import WhiteBoxSm from "../box/white-box-sm";

const ReliableChoice = () => {
  return (
    <div className="bg-white padding-container">
      <div className="max_width content-container w-full flex flex-col gap-20">
        <Title
          title="RELIABLE CHOICE"
          tagline={
            <p className={`taglineText max-w-[700px]`}>
              A reliable choice for{" "}
              <span className="text-secondary">tailored</span> insurance
              solution
            </p>
          }
          subtitle="Discover the assurance of expert guidance, personalized service, and
          dedicated support for your insurance needs."
          subtitleWidth={500}
        />

        <div className="flex flex-row gap-10">
          {insurance_solution_list.map((data, i) => (
            <WhiteBoxSm data={data} i={i} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReliableChoice;
