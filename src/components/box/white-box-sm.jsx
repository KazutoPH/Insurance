import React from "react";
import { NavLink } from "react-router-dom";

const WhiteBoxSm = ({ data, i }) => {
  return (
    <div className="whiteContainer flex-col gap-5">
      <p className="text-primary text-2xl font-semibold poppins">{data.name}</p>
      <p className=" text-lg text-black/50 font-medium">{data.description}</p>
      <NavLink to="/">
        <p className=" text-lg text-primary font-semibold">Learn more</p>
      </NavLink>
    </div>
  );
};

export default WhiteBoxSm;
