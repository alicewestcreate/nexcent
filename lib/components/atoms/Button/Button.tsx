import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import type { CustomTheme } from "@/app/theme";
import React from "react";
import generateSpacingString from "../../../utils/utilityFunc/generateSpacingString";
import { getDynamicIcon } from "@/lib/utils/utilityFunc/getDynamicIcon";
import { IconType } from "../Icons/IconProps";

type IconPosition = "left" | "right";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  children?: string;
  size?: "normal" | "medium" | "small";
  icon?: IconType;
  iconPosition?: IconPosition;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  size = "normal",
  icon,
  iconPosition = "left",
  onClick,
}) => {
  const theme = useTheme() as CustomTheme;

  let buttonStd = css({
    fontSize: theme.font.size.body1,
    borderRadius: theme.spacing.baseSpacing.xs,
    cursor: "pointer",
  });

  let buttonSize = css({
    padding:
      size === "medium"
        ? generateSpacingString(
            theme.spacing.baseSpacing.sm,
            theme.spacing.baseSpacing.xl
          )
        : size === "small"
        ? generateSpacingString(
            theme.spacing.baseSpacing.s,
            theme.spacing.baseSpacing.l
          )
        : generateSpacingString(
            theme.spacing.baseSpacing.m,
            theme.spacing.baseSpacing.xl
          ),
  });

  let buttonVariant = css({
    color:
      variant !== "primary"
        ? theme.colors.primary
        : theme.colors.neutrals.silver,
    backgroundColor:
      variant === "primary"
        ? theme.colors.primary
        : variant === "secondary"
        ? theme.colors.neutrals.white
        : variant === "tertiary"
        ? "inherit"
        : theme.colors.primary,
    border:
      variant === "secondary" ? `1px solid ${theme.colors.primary}` : "none",
  });

  const iconColor = icon && variant != "primary" ? theme.colors.primary : theme.colors.neutrals.silver

  const DynamicIcon = icon ? getDynamicIcon(icon, iconColor) : null;

  return (
    <button
      className={`${buttonStd} ${buttonVariant} ${buttonSize}`}
      onClick={onClick}
    >
      {iconPosition === "left" && DynamicIcon && <DynamicIcon /> }
      {children}
      {iconPosition === "right" && DynamicIcon && <DynamicIcon />}
    </button>
  );
};

export default Button;
