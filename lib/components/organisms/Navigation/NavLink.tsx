import { css } from "@emotion/css";
import Link from "next/link";
import React from "react";

interface Props {
  slug: string;
  children: string;
}

const NavLink: React.FC<Props> = ({ slug, children }) => {

    const style = css({
        // textDecoration: 'none',
        // color: 'inherit',
        // cursor: "pointer",
    })


  return (
    <li><Link className={style} href={slug}>{children}</Link></li>
  );
};

export default NavLink;
