import React from "react";
import Image from "next/image";
import ButtonWrapper from "@/lib/components/atoms/Button/ButtonWrapper";
import { css } from "@emotion/css";
import Typography, { duoToneType } from "../../atoms/Typography/Typography";
import { MediaQuery as mq } from "@/lib/utils/Constants";

interface FeatureSection {
  isHero?: boolean;
  isImageFirst?: boolean;
  duoTone?: duoToneType;
  content?: {
    heading: string;
    body: string;
    image: string;
    cta: {
      label: string;
      slug: string;
    };
  };
}

const FeatureSection: React.FC<FeatureSection> = ({
  isHero = false,
  isImageFirst = false,
  duoTone,
  content,
}) => {
  const defaultContent = {
    // Additonal logic to handle hard coded elements
    heading: "Default Heading",
    duoToned: "Default duo",
    body: "Default Body Text",
    image: "default-image.jpg",
    cta: {
      label: "Default CTA Label",
      slug: "/default-slug",
    },
  };
  const finalContent = content || defaultContent;

  const sectionStyle = css({
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr",
    gridTemplateAreas: "'image' 'content'",
    alignItems: "center",
    justifyItems: "center",
    gap: "42px",

    [mq.desktop]: {
      gridTemplateColumns: isImageFirst ? "3fr 4fr" : "2fr 1fr",
      alignItems: "center",
      gridTemplateAreas: isImageFirst ? "'image content'" : "'content image'",
    },
  });

  const imageStyle = css({
    gridArea: "image",
    position: "relative",
    justifySelf: "center",
    alignSelf: "center",
    height: '100%',
    width: "100%",
    minHeight: "300px",
    [mq.mobile]: {
      minHeight: "400px",

    },
  });
  const contentStyle = css({
    gridArea: "content",
    maxWidth: isHero ? "700px" : "575px",
  });

  const headingStyle = css({
    marginBottom: "16px",
  });

  const paragraphStyle = css({
    marginBottom: "32px",
  });

  return (
    <section className={sectionStyle}>
      <div className={contentStyle}>
        <div className={headingStyle}>
          <Typography
            type={isHero ? "h1" : "h2"}
            variant={isHero ? "h1" : "h2"}
            color="darkgrey"
            text={finalContent.heading}
            duoTone={duoTone}
          ></Typography>
        </div>
        <div className={paragraphStyle}>
          <Typography
            type="p"
            variant={isHero ? "body1" : "body3"}
            color="grey"
            text={finalContent.body}
          ></Typography>
        </div>
        <div>
          <ButtonWrapper label={finalContent.cta.label} />
        </div>
      </div>
      <div className={imageStyle}>
        <Image src={finalContent.image} fill={true} style={{objectFit: "contain"}} alt="illustration"></Image>
      </div>
    </section>
  );
}; 

export default FeatureSection;
