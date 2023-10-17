import React from "react";
import NavLinkList from "../../molecules/NavLinkList/NavLinkList";
import ButtonWrapper from "../../molecules/ButtonWrapper/ButtonWrapper";
import { css } from "@emotion/css";
import BusinessLogo from "../../atoms/BusinessLogo/BusinessLogo";
 import { useTheme } from "@emotion/react";
import type { CustomTheme } from "@/app/theme";

const NavBar = () => {
  const theme = useTheme() as CustomTheme;
  const navStyle = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.neutrals.silver,
    paddingTop: '32px',
  });

  return (
    <>
      <nav className={navStyle}>
        <div>
          <BusinessLogo />
        </div>
        <div>
          <NavLinkList></NavLinkList>
        </div>
        <div>
          <ButtonWrapper variant="tertiary" label="Login"></ButtonWrapper>
          <ButtonWrapper variant="primary" label="Sign Up"></ButtonWrapper>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
