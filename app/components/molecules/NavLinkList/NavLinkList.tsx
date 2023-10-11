import React from "react";
import NavLink from "../../atoms/NavLink/NavLink";
import { css } from "@emotion/css";
import { customTheme as theme } from "@/app/theme";

const NavLinkList = () => {
  const navPages = [
    {
      title: "Home",
      slug: "/home",
    },
    {
      title: "Service",
      slug: "/service",
    },
    {
      title: "Feature",
      slug: "/feature",
    },
    {
      title: "Product",
      slug: "/product",
    },
    {
      title: "Testimonial",
      slug: "/testimonial",
    },
    {
      title: "FAQ",
      slug: "/faq",
    }
];


const ulStyle = css({
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing.baseSpacing.xl
})


  return (
   <ul className={ulStyle}>
      {navPages.map((page, index) => (
        <li><NavLink key={index} slug={page.slug}>
          {page.title}
        </NavLink></li>
      ))}
      </ul>
  );
};

export default NavLinkList;
