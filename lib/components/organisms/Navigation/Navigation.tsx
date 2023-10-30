import React from "react";
import { MediaQuery as mq } from "@/lib/utils/Constants";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { css } from "@emotion/css";
import { customTheme as theme } from "@/app/theme";

const Navigation = () => {
  const navigationSwitch = css({
    position: "fixed",
    zIndex: "100",
    width: "100vw",
    height: "80px",
    [mq.desktop]: {
        height: "120px",
    },
    backgroundColor: theme.colors.neutrals.silver,
    background: `linear-gradient(180deg, ${theme.colors.neutrals.silver} 0%, ${theme.colors.neutrals.silver} 90%, rgba(255,255,255,0) 100%);`,

    " & > div:first-child": {
      display: "none",
      [mq.desktop]: {
        display: "flex"
      },
    },
    " & > div:last-child": {
      display: "flex",
      [mq.desktop]: {
        display: "none",
      },
    },
  });

  return (
    
    <>
      <nav className={navigationSwitch}>
        <DesktopMenu></DesktopMenu>
        <MobileMenu></MobileMenu>
      </nav>
    </>
  );
};

export default Navigation;
