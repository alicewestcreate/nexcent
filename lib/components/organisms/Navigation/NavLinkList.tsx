import React from "react";
import NavLink from "./NavLink";
import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import type { CustomTheme } from "@/app/theme";



const NavLinkList = () => {
  const theme = useTheme() as CustomTheme;
  const navPages = [
    {
      title: "Home",
      slug: "/home",
      id: 123,
    },
    {
      title: "Service",
      slug: "/service",
      id: 234,
    },
    {
      title: "Feature",
      slug: "/feature",
      id: 345,
    },
    {
      title: "Product",
      slug: "/product",
      id: 456,
    },
    {
      title: "Testimonial",
      slug: "/testimonial",
      id: 567,
    },
    {
      title: "FAQ",
      slug: "/faq",
      id: 678,
    }
];


const ulStyle = css({

})


  return (
   <ul className={ulStyle}>
      {navPages.map((page) => (
        <NavLink key={`${page.id}`} slug={page.slug}>
          {page.title}
        </NavLink>
      ))}
      </ul>
  );
};

export default NavLinkList;
