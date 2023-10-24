import { customTheme as theme } from "@/app/theme";
import { css } from "@emotion/css";
import React, { useState } from "react";
import NavLinkList from "./NavLinkList";
import HamBurgerIcon from "../../atoms/Icons/HamBurgerIcon";
import ExitIcon from "../../atoms/Icons/ExitIcon";
import BusinessLogo from "../../atoms/BusinessLogo/BusinessLogo";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const logoWrapper = css({
    position: "fixed",
    left: "20px",
    top: "20px",
  })

  const buttonWrapper = css({
    all: "unset",
    cursor: "pointer",
    position: "fixed",
    right: "10px",
    top: "10px",
    zIndex: "100",
  });

  const mobileMenu = css({
    position: "fixed",
    top: '70px',
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.colors.secondary,
  });

  const menuOpen = css({
    display: 'block',
    backgroundColor: theme.colors.secondary,
    opacity: '0.95',
    transition: "opacity 1s ease-in-out",
  });

  const menuClosed = css({
    display: 'none',
    opacity: '0',
    transition: "opacity 1s ease-in-out",
  });

  const menuPosition = showMenu ? menuOpen : menuClosed;

  const linkListStyle = css({
    "& > ul": {
      paddingTop: "50px",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      alignItems: "center",
      listStyleType: "none",
      color: theme.colors.neutrals.silver,
      fontSize: theme.font.size.h3,
      fontWeight: 300,
      textTransform: "uppercase",
    },
  });

  return (
    <div>
      <div className={logoWrapper}>
        <BusinessLogo/>
      </div>
      <button
        className={`${buttonWrapper}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <ExitIcon color={theme.colors.primary}></ExitIcon>
        ) : (
          <HamBurgerIcon color={theme.colors.primary}></HamBurgerIcon>
        )}
      </button>
      <nav className={`${mobileMenu} ${menuPosition}`}>
        <div className={linkListStyle}>
          <NavLinkList></NavLinkList>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
