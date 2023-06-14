import React from "react";
import { ButtonStyled } from "../../default.styled";
import { NavLink } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";

const Profile = () => {
  return (
    <>
      <div className="profile-header">
        <img src="./img/cribe-logo.png" alt="" width="100%" height="100%" />
        <h4>
          Frontent Development & <br />
          Content Writing
        </h4>
      </div>
      <div className="profile_img">
        <img src="./img/mypic.png" alt="" width="100%" height="100%" />
      </div>
      <div className="profile-text">
        <h3>jason@gmail.com</h3>
        <h3>Based in Osun State, Nigeria</h3>
      </div>
      <p>© 2022 Drake. All Rights Reserved</p>
      <div className="socials">
        <AiFillInstagram className="icons" />
        <AiOutlineTwitter className="icons" />
        <AiFillFacebook className="icons" />
        <AiFillGithub className="icons" />
      </div>
      <ButtonStyled>
        <NavLink className="links">
          <AiOutlineMail className="icons" />
          Hire Me
        </NavLink>
      </ButtonStyled>
    </>
  );
};

export default Profile;
