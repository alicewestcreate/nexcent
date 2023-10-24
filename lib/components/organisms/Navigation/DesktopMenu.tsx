import React from "react";
import NavLinkList from "./NavLinkList";
import ButtonWrapper from "../../atoms/Button/ButtonWrapper";
import { css } from "@emotion/css";
import BusinessLogo from "../../atoms/BusinessLogo/BusinessLogo";
import { useTheme } from "@emotion/react";
import type { CustomTheme } from "@/app/theme";

const DesktopMenu = () => {
  const theme = useTheme() as CustomTheme;
  const navStyle = css({
    position: "fixed",
    top: "0%",
    left: "50%",
    transform: "translate(-50%, 0%)",
    width: "100vw",
    maxWidth: "1000px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "32px",
  });

  const linkListStyle = css({
    "& > ul": {
      listStyleType: "none",
      display: "flex",
      flexDirection: "row",
      gap: theme.spacing.baseSpacing.xl,
    },
  });



  return (
    <>
      <div className={navStyle}>
        <div>
          <BusinessLogo />
        </div>
        <div className={linkListStyle}>
          <NavLinkList></NavLinkList>
        </div>
        <div>
          <ButtonWrapper variant="tertiary" label="Login"></ButtonWrapper>
          <ButtonWrapper variant="primary" label="Sign Up"></ButtonWrapper>
        </div>
      </div>
    </>
  );
};

export default DesktopMenu;
