import React from "react";
import FooterColumn from "./FooterColumn";
import Typography from "../../atoms/Typography/Typography";
import InputField from "./InputField";
import { css } from "@emotion/css";
import CompanyInfo from "./CompanyInfo";

const company = [
  {
    title: "About Us",
    slug: "/about-us",
    id: 123,
  },
  {
    title: "Blog",
    slug: "/blog",
    id: 234,
  },
  {
    title: "Contact Us",
    slug: "/contact-us",
    id: 345,
  },
  {
    title: "Pricing",
    slug: "/pricing",
    id: 456,
  },
  {
    title: "Testimonial",
    slug: "/testimonial",
    id: 567,
  },
];

const support = [
  {
    title: "Help center",
    slug: "/help-center",
    id: 123,
  },
  {
    title: "Terms of service",
    slug: "/terms-of-service",
    id: 234,
  },
  {
    title: "Legel",
    slug: "/Status",
    id: 567,
  },
  {
    title: "Privacy Policy",
    slug: "/privacy-policy",
    id: 345,
  },
  {
    title: "Status",
    slug: "/status",
    id: 456,
  },
];

interface Props {
  isDesktop: boolean;
}

const InternalLinksSection = ({ isDesktop }: Props) => {
  const interalLinkStyling = css({
    display: "flex",
    flexDirection: `${isDesktop ? "row" : "column" }`,
    gap: "60px",
    "& div": {
      " & h4": {
        paddingBottom: "20px",
      },
    },
  });
  return (
    <div className={interalLinkStyling}>
      <FooterColumn heading={"Company"} links={company}></FooterColumn>
      <FooterColumn heading={"Support"} links={support}></FooterColumn>
      <div>
        <Typography
          type="h4"
          variant="h4"
          color={"silver"}
          text={"Email"}
        ></Typography>
        <InputField></InputField>
      </div>
      {!isDesktop && <CompanyInfo></CompanyInfo>}
    </div>
  );
};

export default InternalLinksSection;
