import React from "react";
import Button from "./Button";
import type { ButtonProps } from "./Button";
import { css } from "@emotion/css";

interface Props extends ButtonProps {
  label: string;
  //   onClick: () => void;
}

const ButtonWrapper: React.FC<Props> = ({ onClick, label, ...rest }) => {
  const handleAction = () => {
    const action =
      label === "Login"
        ? "Logging In"
        : label === "Sign Up"
        ? "Signing Up"
        : "Error";
    console.log(action);
  };



  return (
      <Button onClick={handleAction} {...rest}>
        {label}
      </Button>
  );
};

export default ButtonWrapper;
