import React from "react";
import { insurance_plans } from "../../constants";
import Title from "../Title";

const InsurancePlan = () => {
  return (
    <div className="bg-customColor padding-container content-container">
      <div className="max_width w-full flex flex-col gap-20">
        <Title
          title="EXTENSIVE INSURANCE PLANS"
          tagline={
            <p className={`taglineText max-w-[500px]`}>
              Diverse <span className="text-secondary">insurance</span> plans
              for your needs
            </p>
          }
          subtitle=" Access a wide array of insurance plans tailored to fit your unique
        requirements seamlessly."
          width={500}
        />

        <div className=" columns-1 md:columns-2 gap-10 m-auto">
          {insurance_plans.map((plan, i) => (
            <div
              className="whiteContainer MediaCard gap-10 flex-col mb-10"
              key={i}
            >
              <div className="flex flex-col gap-2 w-full">
                <p className="poppins text-primary text-4xl font-semibold text-pretty">
                  {plan.title}
                </p>
                <p className=" text-lg text-black/50 font-medium text-pretty">
                  {plan.content}
                </p>
              </div>

              <div className="btn bg-primary w-fit">
                <p className="text-white">Learn More</p>
              </div>

              <img
                src={plan.image}
                alt={plan.image}
                className={`w-full ${
                  i % 3 === 0 ? " aspect-square" : " aspect-video"
                } object-cover rounded-lg`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsurancePlan;
