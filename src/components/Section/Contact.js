import React from "react";
import { SectionContentStyled, SectionTitleStyled } from "./Section.styled";
import { AiOutlineMail } from "react-icons/ai";
import { ContactStyled } from "../Contact/ContactStyled";

import ContactForm from "../Contact/ContactForm";

const Contact = () => {
  return (
    <>
      <SectionTitleStyled>
        <h5>
          <AiOutlineMail className="icons" /> CONTACT
        </h5>
      </SectionTitleStyled>
      <SectionContentStyled>
        <h2>
          Thank you for your interest in{" "}
          <span id="special-text"> Working Together!</span>
        </h2>

        <div className="contact-form">
          <ContactStyled>
            <ContactForm />
          </ContactStyled>
        </div>
      </SectionContentStyled>
    </>
  );
};

export default Contact;
