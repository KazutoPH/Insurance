import React from "react";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 max_width w-full flex flex-row justify-between items-center px-10 py-4 rounded-bl-lg rounded-br-lg bg-white z-20">
      <NavLink to="/">
        <p className="text-3xl text-secondary font-medium">
          pru<span className="text-primary font-bold">Care</span>
        </p>
      </NavLink>
      <div className="flex flex-row items-center gap-5">
        <ul className="lg:flex flex-row items-center gap-5 hidden">
          {navLinks.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.route}
                className={({ isActive }) =>
                  isActive
                    ? " text-primary font-semibold"
                    : " text-black/50  font-medium "
                }
              >
                <p className="poppins text-xl">{link.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex flex-row gap-3">
          <NavLink to="/free-qoute">
            <div className="btn bg-customColor w-[120px]">
              <p className=" text-primary">Free qoute</p>
            </div>
          </NavLink>

          <NavLink to="/contact">
            <div className="btn bg-primary w-[120px]">
              <p className=" text-white">Contact Us</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
