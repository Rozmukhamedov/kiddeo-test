import "./style.css";
import React from "react";
import DownIcon from "../../assets/icons/down.svg?react";
import { SelectProps, Select } from "@mantine/core";

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

type CSelectProps = SelectProps & {
  options: Option[];
  value: string | number | null;
  onChange: (value: any) => void;
};

const CSelect: React.FC<CSelectProps> = ({
  options,
  value,
  onChange,
  ...props
}) => {
  return (
    <Select
      className="select"
      label="123"
      checkIconPosition="right"
      data={options}
      rightSection={<DownIcon />}
      value={value}
      onChange={(newValue) => onChange(newValue)}
      {...props}
    />
  );
};

export default CSelect;
