/** @jsxImportSource @emotion/react */
import React from "react";
import { customTheme as theme } from "@/app/theme";
import type { ThemeFontSizes, ThemeColors } from "@/app/theme";
import { css } from "@emotion/css";
import getThemeColor from "@/app/utils/utilityFunc/getThemeColor";
import getFontSize from "@/app/utils/utilityFunc/getFontSize";


interface TypographyProps {
  type?: "h1" | "h2" | "h3" | "h4" | "p";
  variant?: keyof ThemeFontSizes;
  color?: keyof ThemeColors | ThemeColors[keyof ThemeColors];
  align?: "left" | "center" | "right";
  children: string | React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  type = "p",
  variant = "body1",
  color = "black",
  align = "left",
  children,
}) => {
  const Element = type;
  const fontColor = getThemeColor(typeof color === "string" ? color : "");


  const typographyStyle = css({
    fontSize: theme.font.size[variant],
    color: fontColor,
    textAlign:
      align === "left" ? "left" : align === "center" ? "center" : "right",
    fontWeight:
      variant === "h1" ||
      variant === "h2" ||
      variant === "h3" ||
      variant === "h4"
        ? theme.font.weight.semiBold
        : theme.font.weight.regular,
    lineHeight: 
    variant === "h1" ||
    variant === "h2" ||
    variant === "h3" ||
    variant === "h4"
      ? 1.1
      : 1.5,

  });

  return <Element css={typographyStyle}>{children}</Element>;
};

export default Typography;
