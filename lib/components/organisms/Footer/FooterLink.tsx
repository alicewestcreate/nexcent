import { customTheme } from "@/app/theme";
import { css } from "@emotion/css";
import Link from "next/link";
import React from "react";

interface Props {
  slug: string;
  children: string;
}

const FooterLink: React.FC<Props> = ({ slug, children }) => {
  const style = css({
    color: customTheme.colors.neutrals.silver,
    fontSize: customTheme.font.size.body3,
    fontWeight: customTheme.font.weight.regular,
    lineHeight: "1.7rem",
  });

  return (
    <li>
      <Link className={style} href={slug} data-testid="navigation-link">
        {children}{" "}
      </Link>
    </li>
  );
};

export default FooterLink;
