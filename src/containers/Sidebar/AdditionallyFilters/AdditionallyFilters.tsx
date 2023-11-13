import React from "react";
import { CAccordion, CCheckbox } from "../../../components";

export const CheckboxList = ({ additionally, setAdditionally }: any) => {
  const list = [
    "Место для игр",
    "Место, чтобы переодеться",
    "Место для красивых фото",
  ];

  return list.map((item: string, index: number) => (
    <CCheckbox
      key={index}
      label={item}
      value={item}
      checked={additionally == item}
      onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent> | any) =>
        setAdditionally(e.target?.value)
      }
    />
  ));
};

function AdditionallyFilters({ additionally, setAdditionally }: any) {
  const data = [
    {
      value: "Зонирование",
      description: (
        <CheckboxList
          additionally={additionally}
          setAdditionally={setAdditionally}
        />
      ),
    },
    {
      value: "Что еще есть",
      description: "Lorem",
    },
    {
      value: "Условия",
      description: "Lorem",
    },
  ];

  return <CAccordion items={data} />;
}

export default AdditionallyFilters;
