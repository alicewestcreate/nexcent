import React from "react";
import NavLink from "./NavLink";
import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import type { CustomTheme } from "@/app/theme";

const NavLinkList = () => {
  const theme = useTheme() as CustomTheme;

  const navTitles = [
    "Home",
    "Services",
    "Features",
    "Products",
    "Testimonials",
    "FAQs",
  ];

  const convertToSlug = (page: string) =>
    `/${page.toLowerCase().split(" ").join("-")}`;

  const renderNavLinks = () => {
    return navTitles.map((title, index) => {      
      let slug = convertToSlug(title);
      return (
        <NavLink key={index} slug={slug}>
          {title}
        </NavLink>
      );
    });
  };

  const ulStyle = css({});

  return <ul className={ulStyle}>{renderNavLinks()}</ul>;
};

export default NavLinkList;
