import React from "react";
import Typography from "../../atoms/Typography/Typography";
import ButtonWrapper from "../../atoms/Button/ButtonWrapper";
import { css } from "@emotion/css";
import Button from "../../atoms/Button/Button";

const Demo = () => {
  const buttonWrapper = css({
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
    '& > *': {
        width: 'fit-content',
    },
    '& > :first-child' : {
        maxWidth: "900px"

    }

  });
  return (
    <div className={buttonWrapper}>
      <Typography
        type={"h2"}
        variant={"h1"}
        align={"center"}
        text={"Pellentesque suscipit fringilla libero eu."}
      ></Typography>
      <ButtonWrapper variant="primary" label={"Get a Demo"}></ButtonWrapper>
    </div>
  );
};

export default Demo;
