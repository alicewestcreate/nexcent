import { css } from "@emotion/css";
import React from "react";
import { useTheme } from "@emotion/react";
import type { CustomTheme } from "@/app/theme";
import LogoName from "./LogoName";
import LogoIcon from "./LogoIcon";

interface BusinessLogoProps {
  inverted? : boolean
} 


const BusinessLogo = ({inverted = false}: BusinessLogoProps) => {
  const theme = useTheme() as CustomTheme;
  const logoStyle = css({
    display: "flex",
    gap: theme.spacing.baseSpacing.s
  });

  return (
    <div className={logoStyle}>
      <LogoIcon inverted={inverted}></LogoIcon>
      <LogoName inverted={inverted}></LogoName>
    </div>
  );
};

export default BusinessLogo;
