import React from "react";
import {
  FaBox,
  FaGripVertical,
  FaHome,
  FaServicestack,
  FaUser,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

import { AiOutlineMail } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { scrollToPoint } from "../../../extras";

const NavLinks = ({ reference, click }) => {
  const clickHandler = (refer) => {
    scrollToPoint(refer);
    click();
  };
  // console.log(reference, func);
  return (
    <>
      <ul className="main-link">
        <li onClick={() => clickHandler(reference[0])}>
          <NavLink to="#" className="links">
            <FaHome className="icon" />
            <span id="link-name">Home</span>
          </NavLink>
        </li>
        <li onClick={() => clickHandler(reference[1])}>
          <NavLink to="#" className="links">
            <FaUser className="icon" />
            <span id="link-name">About</span>
          </NavLink>
        </li>
        <li onClick={() => clickHandler(reference[2])}>
          <NavLink className="links">
            <FaBox className="icon" />
            <span id="link-name">Resume</span>
          </NavLink>
        </li>
        <li onClick={() => clickHandler(reference[3])}>
          <NavLink to="#" className="links">
            <FaServicestack className="icon" />
            <span id="link-name">Services</span>
          </NavLink>
        </li>
        <li onClick={() => clickHandler(reference[4])}>
          <NavLink to="#" className="links">
            <GiSkills className="icon" />
            <span id="link-name">Skills</span>
          </NavLink>
        </li>
        <li onClick={() => clickHandler(reference[5])}>
          <NavLink to="#" className="links">
            <FaGripVertical className="icon" />
            <span id="link-name">Portfolio</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="#" className="links">
            <MdOutlineMessage className="icon" />
            <span id="link-name">Testimonial</span>
          </NavLink>
        </li> */}
        <li onClick={() => clickHandler(reference[6])}>
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
