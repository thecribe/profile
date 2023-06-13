import React from "react";
import {
  FaBox,
  FaGripVertical,
  FaHome,
  FaServicestack,
  FaUser,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdOutlineMessage } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
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
            <FaGripVertical className="icon" />
            <span id="link-name">Portfolio</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="links">
            <MdOutlineMessage className="icon" />
            <span id="link-name">Testimonial</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="links">
            <AiOutlineMail className="icon" />
            <span id="link-name">Contact</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
