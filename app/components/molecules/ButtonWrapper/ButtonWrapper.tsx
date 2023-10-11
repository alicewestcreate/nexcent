import React from "react";
import Button from "../../atoms/Button/Button";
import type { ButtonProps } from "../../atoms/Button/Button";

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
