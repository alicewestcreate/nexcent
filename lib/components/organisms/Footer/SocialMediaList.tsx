import React from "react";
import { css } from "@emotion/css";
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa6";

const SocialMediaList = () => {

  const styling = css({
    display: 'flex',
    gap: '10px',
    "& > * ": {
      display: 'flex',
    
    },
  });

  const buttonCSS = css({
    padding: '7px',
    border: "none",
    maxWidth: '32px',
    maxHeight: '32px',
    borderRadius: "16px",
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
  })

  const iconCSS = {
    color: "white",
  };

  return (
    <div className={styling}>

      <a className={buttonCSS} href="www.intstagram.co.uk">
        <FaInstagram style={iconCSS}></FaInstagram>
      </a>
      <a className={buttonCSS} href="www.dribbble.co.uk">
        <FaDribbble style={iconCSS}></FaDribbble>
      </a>
      <a className={buttonCSS} href="www.twitter.co.uk">
        <FaTwitter style={iconCSS}></FaTwitter>
      </a>
      <a className={buttonCSS} href="www.youtube.co.uk">
        <FaYoutube style={iconCSS}></FaYoutube>
      </a>
    </div>
  );
};

export default SocialMediaList;
