import React from "react";
import Typography from "../../atoms/Typography/Typography";

interface Props {
  text: string;
}

const FooterHeading = ({ text }: Props) => {
  return (
    <Typography
      type="h4"
      variant="h4"
      color={"silver"}
      text={text}
    ></Typography>
  );
};

export default FooterHeading;
