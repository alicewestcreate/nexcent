import React from "react";
import Typography from "../../atoms/Typography/Typography";
import { css } from "@emotion/css";

interface headingCardsProps {
  content: {
    heading: string;
    copy: string;
  };
  alignment?: 'left' | 'center' | 'right'
}

const HeadingCard: React.FC<headingCardsProps> = ({ content, alignment = "center" }) => {
  const headingCardWrapperStyles = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'center',
    paddingTop: '50px',
    '& > :first-child': {
        maxWidth: '45%',
        margin: '0 auto',
    },
    '& > : last-child': {
        maxWidth: '55%',
        paddingTop: '10px',
        margin: '0 auto',
    }

  });



  return (
    <>
      <div className={headingCardWrapperStyles}>
        <Typography type="h2" variant="h2" align={alignment} color="darkgrey">
          {content.heading}
        </Typography>
        <Typography type="p" variant="body2" align={alignment} color="grey">
            {content.copy}
        </Typography>
      </div>
    </>
  );
};

export default HeadingCard;
