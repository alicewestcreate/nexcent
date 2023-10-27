import React from "react";
import { css } from "@emotion/css";
import FooterLink from "./FooterLink";

interface footerProps {
  links: {
    title: string;
    slug: string;
    id: number;
  }[];
}

const FooterColumn = ({ links }: footerProps) => {
  const linkStyling = css({
    listStyleType: "none",
    textDecoration: "none",
  });

  const renderColumn = () => {
    return links.map((page, index) => (
      <FooterLink key={index} slug={page.slug}>
        {page.title}
      </FooterLink>
    ));
  };

  return (
    <div>
      <ul className={linkStyling}>{renderColumn()}</ul>
    </div>
  );
};

export default FooterColumn;
