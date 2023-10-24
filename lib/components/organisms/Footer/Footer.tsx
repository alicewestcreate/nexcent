import React from "react";
import FooterColumn from "./FooterColumn";
import { css } from "@emotion/css";
import { customTheme as theme } from "@/app/theme";
import InputField from "./InputField";
import Typography from "../../atoms/Typography/Typography";
import InternalLinksSection from "./InternalLinksSection";
import CompanyInfo from "./CompanyInfo";
import { MediaQuery as mq, MQ } from "@/lib/utils/Constants";

const Footer = () => {
  const isDesktop = window.matchMedia(`(min-width: ${MQ.tablet}px)`).matches;

  const footerStyle = css({
    display: "grid",
    justifyItems: "center",
    [mq.desktop]: {
      gridTemplateColumns: "1fr 2fr",
    },
  });

  return (
    <footer className={footerStyle}>
      {isDesktop && <CompanyInfo></CompanyInfo>}
      <InternalLinksSection isDesktop={isDesktop}></InternalLinksSection>
    </footer>
  );
};

export default Footer;
