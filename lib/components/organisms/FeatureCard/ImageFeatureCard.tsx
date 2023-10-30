import React from "react";
import Image from "next/image";
import Typography from "../../atoms/Typography/Typography";
import { css } from "@emotion/css";
import { customTheme as theme } from "@/app/theme";
import generateSpacingString from "@/lib/utils/utilityFunc/generateSpacingString";
import Button from "../../atoms/Button/Button";

interface ImageFeatureCardProps {
  image: string;
  copy: string;
  link: string;
}

const ImageFeatureCard = ({ image, copy, link }: ImageFeatureCardProps) => {
  const cardStyling = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

  const imageWrapper = css({
    position: 'relative',
    width: "368px",
    height: "286px",

  })

  const contentCard = css({
    display: "flex",
    flexDirection: "column",
    marginTop: "-87px",
    height: "176px",
    width: "317px",
    justifyContent: "space-between",
    zIndex: "5",

    backgroundColor: theme.colors.neutrals.silver,
    borderRadius: theme.spacing.baseSpacing.s,
    padding: generateSpacingString(16, 16),
  });
  return (
    image && (
      <div className={cardStyling}>
        <div className={imageWrapper}>
        <Image src={image?.length ? image : "dont"} alt="displayImage" fill={true}/>
        </div>
        <div className={contentCard}>
          <Typography align="center" text={copy} />
          <Button variant="tertiary" icon="RightArrow" iconPosition="right">
            {link}
          </Button>
        </div>
      </div>
    )
  );
};

export default ImageFeatureCard;
