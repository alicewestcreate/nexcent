import React from "react";
import { IconType } from "../../atoms/Icons/IconProps";
import IconFeatureCard from "./IconFeatureCard";
import { css } from "@emotion/css";
import { MediaQuery as mq } from "@/lib/utils/Constants";

interface FeatureCardWrapProps {
  contents: {
    icon: string;
    heading: string;
    copy: string;
  }[];
}

const CardWrap: React.FC<FeatureCardWrapProps> = ({ contents }) => {
  const CardWrap = contents.map((content, index) => (
    <IconFeatureCard
      key={index}
      icon={content.icon as IconType}
      heading={content.heading}
      copy={content.copy}
    ></IconFeatureCard>
  ));

  const featureCardWrapStyles = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "32px",
    [mq.desktop]: {
      flexDirection: "row",
    },
    
    justifyContent: "space-around",
  });

  return <div className={featureCardWrapStyles}>{CardWrap}</div>;
};

export default CardWrap;
