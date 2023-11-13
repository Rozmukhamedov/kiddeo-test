import "./style.css";
import "dayjs/locale/ru";
import React from "react";
import { DatePickerInputProps, DatePickerInput } from "@mantine/dates";
import DateRangeIcon from "../../assets/icons/date_range.svg?react";

type CDatePickerProps = DatePickerInputProps & {
  value: Date | null;
  onChange: (date: any) => void;
  onDateChange?: (date: any) => void;
};

const CDatePicker: React.FC<CDatePickerProps> = ({
  value,
  onChange,
  onDateChange,
  valueFormat = "DD/MM/YYYY",
  ...rest
}) => {
  return (
    <DatePickerInput
      locale="ru"
      className={"date-picker"}
      value={value}
      onChange={onChange}
      valueFormat={valueFormat}
      onDateChange={onDateChange}
      rightSection={<DateRangeIcon />}
      {...rest}
    />
  );
};

export default CDatePicker;
