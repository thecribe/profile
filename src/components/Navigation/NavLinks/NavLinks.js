import React from "react";
import { FaBox, FaHome, FaServicestack, FaUser } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="#" className="links">
            <FaHome className="icon" />
            <span id="link-name">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="links">
            <FaUser className="icon" />
            <span id="link-name">About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="links">
            <FaBox className="icon" />
            <span id="link-name">Resume</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="links">
            <FaServicestack className="icon" />
            <span id="link-name">Services</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="links">
            <GiSkills className="icon" />
            <span id="link-name">Skills</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="links">
            <FaHome className="icon" />
            <span id="link-name">Portfolio</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="links">
            <FaHome className="icon" />
            <span id="link-name">Testimonial</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="links">
            <FaHome className="icon" />
            <span id="link-name">Contact</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
