import React from "react";
import { css } from "@emotion/css";
import CompanyInfo from "./CompanyInfo";
import { MediaQuery as mq, MQ } from "@/lib/utils/Constants";
import FooterHeading from "./FooterHeading";
import FooterColumn from "./FooterColumn";
import { company, support } from "./FooterContent";
import EmailInputField from "./EmailInputField";

const Footer = () => {
  const footerStyle = css({
    display: "grid",
    justifyItems: "center",
    gap: "30px",
    gridTemplateAreas: '"companyLinks" "supportLinks" "email" "companyInfo"',
    [mq.tablet]: {
      gridTemplateAreas: '"companyLinks supportLinks" "email companyInfo"',
      justifyItems: "left",
    },
    [mq.desktop]: {
      gridTemplateAreas: '"companyInfo companyLinks supportLinks email"',
    },

    "& > * > h4": {
      paddingBottom: "20px",
    },

    "& > :first-child": {
      gridArea: "companyLinks",
    },
    "& > :nth-child(2)": {
      gridArea: "supportLinks",
    },
    "& > :nth-child(3)": {
      gridArea: "email",
    },
    "& > :nth-child(4)": {
      gridArea: "companyInfo",
      "& > div": {
        paddingBottom: "20px",
      },
    },
  });

  return (
    <footer className={footerStyle}>
      <div>
        <FooterHeading text={"Company"}></FooterHeading>
        <FooterColumn links={company}></FooterColumn>
      </div>
      <div>
        <FooterHeading text={"Support"}></FooterHeading>
        <FooterColumn links={support}></FooterColumn>
      </div>
      <div>
        <FooterHeading text="Email"></FooterHeading>
        <EmailInputField></EmailInputField>
      </div>
      <div>
        <CompanyInfo></CompanyInfo>
      </div>
    </footer>
  );
};

export default Footer;
