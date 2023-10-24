import React from "react";
import NavLink from "../Navigation/NavLink";
import { css } from "@emotion/css";
import { customTheme as theme } from "@/app/theme";
import Typography from "../../atoms/Typography/Typography";

interface footerProps {
  heading: string;
  links: {
    title: string;
    slug: string;
    id: number;
  }[];
}

const FooterColumn = ({ heading, links }: footerProps) => {
  const linkStyling = css({
    color: theme.colors.neutrals.silver,
    fontSize: theme.font.size.body3,
    fontWeight: theme.font.weight.regular,
    listStyleType: "none",
    textDecoration: "none",
    lineHeight: "1.7rem",

  });

  const column = links.map((page, index) => (
    <NavLink key={index} slug={page.slug}>
      {page.title}
    </NavLink>
  ));

  return (
    <div>
      <Typography type="h4" variant="h4" color={"silver"} text={heading}></Typography>
      <ul className={linkStyling}>{column}</ul>
    </div>
  );
};

export default FooterColumn;
