import React from "react";
import SocialMediaButton from "./SocialMediaButton";
import { css } from "@emotion/css";

const SocialMediaList = () => {
  const socialMedia = [1, 2, 3, 4];

  const styling = css({
    "& > * ": {
      marginTop: "10px",
      marginRight: "10px",
    },
  });

  return (
    <div className={styling}>
      {socialMedia.map((media, index) => (
        <SocialMediaButton key={index}></SocialMediaButton>
      ))}
    </div>
  );
};

export default SocialMediaList;
