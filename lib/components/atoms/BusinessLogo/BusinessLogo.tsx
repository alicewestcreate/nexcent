import { css } from "@emotion/css";
import React from "react";
import { useTheme } from "@emotion/react";
import type { CustomTheme } from "@/app/theme";


const BusinessLogo = () => {
  const theme = useTheme() as CustomTheme;


  const logoStyle = css({
    display: "flex",
    gap: theme.spacing.baseSpacing.s
  });

  return (
    <div className={logoStyle}>
      <img src="./Icon.svg"></img>
      <img src="./Nexcent.svg"></img>
    </div>
  );
};

export default BusinessLogo;
