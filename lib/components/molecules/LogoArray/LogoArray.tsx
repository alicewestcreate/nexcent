import React from "react";
import Image from "next/image";
import { css } from "@emotion/css";

interface LogoArrayProps {
  maxItemsToShow?: number
}

const LogoArray = ({maxItemsToShow}:LogoArrayProps ) => {
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
    flexWrap: 'wrap',
    gap: "10px",
    justifyContent: "space-around",


  })

  const finalMaxItems = maxItemsToShow || images.length


  const Logos = images.slice(0,finalMaxItems).map((image, index) => {
    return <div key={index}><Image key={index} src={`/${image}`} alt={`${image} company logo`} width={48} height={48}/></div>;
  })


  return (
    <div className={logoArrayStyle}>
      {Logos}
    </div>
  );
};

export default LogoArray;
