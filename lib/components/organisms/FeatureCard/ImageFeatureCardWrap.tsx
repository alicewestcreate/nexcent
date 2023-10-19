import React from "react";
import ImageFeatureCard from "./ImageFeatureCard";
import { css } from "@emotion/css";
import { MediaQuery as mq } from "@/lib/utils/Constants";

interface ImageFeatureCardWrapProps {
  content: {
    image: string;
    copy: string;
    link: string;
  }[];
}

const cardWrap = css({
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    gap: '16px',
    [mq.desktop]: {
        flexDirection: 'row',
    }

})



const ImageFeatureCardWrap = ({ content }: ImageFeatureCardWrapProps) => {
  return (
    <div className={cardWrap}>
      {content.map((item, index) => (
        <ImageFeatureCard
          key={index}
          image={item.image}
          copy={item.copy}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default ImageFeatureCardWrap;
