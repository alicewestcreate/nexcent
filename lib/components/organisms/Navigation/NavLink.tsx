import { customTheme } from "@/app/theme";
import { css } from "@emotion/css";
import Link from "next/link";
import React from "react";

interface Props {
  slug: string;
  children: string;
}

const NavLink: React.FC<Props> = ({ slug, children }) => {

    const style = css({
      color: "inherit",
        '&:hover' : {
          color: customTheme.colors.primary,
          borderBottom: `2px solid ${customTheme.colors.primary}`
        }
    })


  return (
    <li><Link className={style} href={slug} data-testid="navigation-link">{children} </Link></li>
  );
};

export default NavLink;
