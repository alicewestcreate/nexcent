import React from "react";
import Image from "@/app/components/atoms/Image/Image";
import ButtonWrapper from "@/app/components/molecules/ButtonWrapper/ButtonWrapper";
import { css } from "@emotion/css";
import { customTheme as theme } from "@/app/theme";
import getThemeColor from "@/app/utils/utilityFunc/getThemeColor";
import Typography from "../../atoms/Typography/Typography";

type CustomeThemeColors = typeof theme.colors;

interface FeatureSection {
    isHero? : boolean,
    isImageFirst?: boolean,
    background?: keyof CustomeThemeColors | CustomeThemeColors[ keyof CustomeThemeColors],
    content?: {
        heading: string,
        body: string,
        image: string,
        cta: {
        label: string,
        slug: string,
    };
  };
}

const FeatureSection: React.FC<FeatureSection> = ({
    isHero = false,
  isImageFirst = false,
  background,
  content,
}) => {
  const defaultContent = {
    // Additonal logic to handle hard coded elements
    heading: "Default Heading",
    body: "Default Body Text",
    image: "default-image.jpg",
    cta: {
      label: "Default CTA Label",
      slug: "/default-slug",
    },
  };
  const finalContent = content || defaultContent;


  const sectionStyle = css({
    paddingTop: "100px",
    paddingBottom: "100px",
    display: "grid",
    // Ismobile? gridTemlateToRow??????? 
    gridTemplateColumns: isImageFirst ? "3fr 4fr" : "2fr 1fr" ,
    alignItems: "center",
    gridTemplateAreas: isImageFirst ?  "'image content'" : "'content image'",
    background: background ? getThemeColor(typeof background === 'string' ? background : "") : '',
  });

  const imageStyle = css({
    gridArea: "image",
    justifySelf: 'center',
    alignSelf: 'center',
  });
  const contentStyle = css({
    gridArea: "content",
  
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
        <Typography type={isHero ? 'h1' : 'h2'}  variant={isHero ? 'h1' : 'h2'} color="darkgrey">{finalContent.heading}</Typography>
        </div>
        <div className={paragraphStyle}>
        <Typography type="p" variant={isHero ? 'body1' : 'body3'} color="grey">
            {finalContent.body}
          </Typography>
        </div>
        <div>
          <ButtonWrapper label={finalContent.cta.label} />
        </div>
      </div>
      <div className={imageStyle}>
        <Image src={finalContent.image}></Image>
      </div>
    </section>
  );
};

export default FeatureSection;
