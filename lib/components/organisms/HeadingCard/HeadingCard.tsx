import React from "react";
import Typography, { alignmentType, duoToneType } from "../../atoms/Typography/Typography";
import { css } from "@emotion/css";
import { MediaQuery as mq } from "@/lib/utils/Constants";

interface headingCardsProps {
  content: {
    heading: string;
    copy: string;
  };
  alignment?: alignmentType,
  duoTone?: duoToneType,
}

const HeadingCard: React.FC<headingCardsProps> = ({ content, duoTone, alignment = "center" }) => {
  const headingCardWrapperStyles = css({
    display: 'flex',
    flexDirection: 'column',
    [mq.tablet]: {
      maxWidth: '600px',
      margin: '0 auto',
    },

    '& > :first-child': {
    },
    '& > : last-child': {
    }

  });



  return (
    <>
      <div className={headingCardWrapperStyles}>
        <Typography type="h2" variant="h2" align={alignment} color="darkgrey" text={content.heading} duoTone={duoTone}/>
        <Typography type="p" variant="body2" align={alignment} color="grey" text={content.copy}/>
      </div>
    </>
  );
};

export default HeadingCard;
