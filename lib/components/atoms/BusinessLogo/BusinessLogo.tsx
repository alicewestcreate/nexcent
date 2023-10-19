import { css } from "@emotion/css";
import React from "react";
import { useTheme } from "@emotion/react";
import type { CustomTheme } from "@/app/theme";
import LogoName from "./LogoName";

interface BusinessLogoProps {
  color?: string
} 


const BusinessLogo = ({color}: BusinessLogoProps) => {
  const theme = useTheme() as CustomTheme;
  const logoStyle = css({
    display: "flex",
    gap: theme.spacing.baseSpacing.s
  });

  return (
    <div className={logoStyle}>
      <img src="./Icon.svg"></img>
      <LogoName color={color}></LogoName>
    </div>
  );
};

export default BusinessLogo;
