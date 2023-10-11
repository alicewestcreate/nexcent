import { css } from "@emotion/css";
import React from "react";
import { customTheme as theme } from "@/app/theme";
import generateSpacingString from '../../../utils/utilityFunc/generateSpacingString'

export interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  children?: string;
  size?: "normal" | "medium" | "small";
  icon?: React.ReactNode | undefined;
  iconPosition?: "left" | "right" | undefined;
  onClick? : () => void
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  size = "normal",
  icon = undefined,
  iconPosition = undefined,
  onClick,
}) => {

  let buttonStd = css({
    fontSize: theme.font.size.body1,
    borderRadius: theme.spacing.baseSpacing.xs,
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
        : theme.colors.neutrals.white,
    backgroundColor:
      variant !== "primary"
        ? theme.colors.neutrals.white
        : theme.colors.primary,
    border:
      variant === "secondary" ? `1px solid ${theme.colors.primary}` : "none",
  });

  return (
    <button className={`${buttonStd} ${buttonVariant} ${buttonSize}`} onClick={onClick}>
      {icon && icon === "left" && <i>{icon}</i>}
      {children}
      {icon && icon === "right" && <i>{icon}</i>}
    </button>
  );
};

export default Button;
