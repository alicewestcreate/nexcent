import { customTheme as theme} from "@/app/theme";
import { css } from "@emotion/css";
import React from "react";

const BusinessLogo = () => {
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
