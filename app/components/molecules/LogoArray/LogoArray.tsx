import React from "react";
import Image from "../../atoms/Image/Image";
import { css } from "@emotion/css";

const LogoArray = () => {
  const images = [
    "Logo-0.png",
    "Logo-1.png",
    "Logo-2.png",
    "Logo-3.png",
    "Logo-4.png",
    "Logo-5.png",
    "Logo-6.png",
  ];

  const logoArrayStyle = css({
    display: 'flex',
    justifyContent: "space-around",
    paddingTop: "40px",
    filter: 'grayscale(100)',

  })


  return (
    <div className={logoArrayStyle}>
      {images.map((image, index) => {
        return <div><Image key={index} src={`./${image}`}/></div>;
      })}
    </div>
  );
};

export default LogoArray;
