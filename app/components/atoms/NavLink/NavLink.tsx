import { css } from "@emotion/css";
import Link from "next/link";
import React from "react";

interface Props {
  slug: string;
  children: string;
}

const NavLink: React.FC<Props> = ({ slug, children }) => {

    const style = css({
        textDecoration: 'none',
        color: 'inherit',
    })


  return (
    <Link className={style} href={slug}>{children}</Link>
  );
};

export default NavLink;
