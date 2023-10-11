import React from "react";
import { customTheme as theme } from "@/app/theme";

const getFontSize = (variant:string) => {
  switch (variant) {
    case "h1":
      return theme.font.size.h1;
    case "h2":
      return theme.font.size.h2;
    case "h3":
      return theme.font.size.h3;
    case "h4":
      return theme.font.size.h4;
    case "body1":
      return theme.font.size.body1;
    case "body2":
      return theme.font.size.body2;
    case "body3":
      return theme.font.size.body3;
    case "body4":
      return theme.font.size.body4;
    default:
      return theme.font.size.body1;
  }
};

export default getFontSize;
