import React from "react";
import { Button, ButtonProps } from "@mantine/core";

type CButtonProps = ButtonProps & {
  children?: string;
  onClick: () => void;
};

const CButton: React.FC<CButtonProps> = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default CButton;
