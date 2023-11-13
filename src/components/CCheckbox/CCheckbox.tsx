import "./style.css";
import React from "react";
import { Checkbox, CheckboxProps } from "@mantine/core";

interface CCheckboxProps extends CheckboxProps {
  defaultChecked?: boolean;
  label?: string;
}

const CCheckbox: React.FC<CCheckboxProps> = ({
  defaultChecked,
  label,
  ...props
}) => {
  return (
    <Checkbox
      className="checkbox"
      defaultChecked={defaultChecked}
      label={label}
      color="#F2766A"
      {...props}
    />
  );
};

export default CCheckbox;
