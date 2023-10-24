/** @jsxImportSource @emotion/react */
import React from "react";
import { useTheme } from "@emotion/react";
import type { CustomTheme } from "@/app/theme";
import type { ThemeFontSizes, ThemeColors } from "@/app/theme";
import { css } from "@emotion/css";
import getThemeColor from "@/lib/utils/utilityFunc/getThemeColor";
import generateDuoTonedText from "@/lib/utils/utilityFunc/generateDuoTonedText";

export type type = "h1" | "h2" | "h3" | "h4" | "p";
export type alignmentType = "left" | "center" | "right" | "justify";
export type duoToneDirection = "start" | "end";
export type duoToneType = {
  direction?: duoToneDirection
  value?: number;
  nextLine?: boolean;
};

interface TypographyProps {
  type?: type;
  variant?: keyof ThemeFontSizes;
  color?: keyof ThemeColors | ThemeColors[keyof ThemeColors];
  align?: alignmentType;
  duoTone?: duoToneType;
  text: string | React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  type = "p",
  variant = "body1",
  color = "black",
  align = "left",
  duoTone,
  text,
}) => {
  const theme = useTheme() as CustomTheme;

  const Element = type;
  const fontColor = getThemeColor(typeof color === "string" ? color : "");

  // let finalText = duoTone
  //   ? generateDuoTonedText(text, duoTone?.direction, duoTone.value, duoTone.nextLine)
  //   : text;

  let finalText = duoTone ? generateDuoTonedText(text, "end", 3, true) : text;

  const typographyStyle = css({
    fontSize: theme.font.size[variant],
    color: fontColor,
    textAlign:
      align === "left" ? "left" : align === "center" ? "center" :  align === "justify" ? "justify" : "right",
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
    "& span": {
      color: theme.colors.primary,
    },
  });

  return <Element className={typographyStyle}>{finalText}</Element>;
};

export default Typography;
