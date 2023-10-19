import React from "react";
import Image from "../../atoms/Image/Image";
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

  console.log("image", image);

  const contentCard = css({
    display: "flex",
    flexDirection: "column",
    marginTop: "-87px",
    height: "176px",
    width: "317px",
    justifyContent: "space-between",

    backgroundColor: theme.colors.neutrals.silver,
    borderRadius: theme.spacing.baseSpacing.s,
    padding: generateSpacingString(16, 16),
  });
  return (
    image && (
      <div className={cardStyling}>
        <Image src={image?.length ? image : "dont"} width="350px" />
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
