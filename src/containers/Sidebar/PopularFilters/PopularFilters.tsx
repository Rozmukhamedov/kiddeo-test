import React from "react";
import { CAccordion, CCheckbox, CSlider } from "../../../components";
import StarIcon from "../../../assets/icons/star.svg?react";

export const CheckboxListCapacity = ({ capacity, setCapacity }: any) => {
  const list = ["До 20 человек", "От 20 до 50", "Больше 50"];

  return list.map((item: string, index: number) => (
    <CCheckbox
      key={index}
      label={item}
      value={item}
      checked={capacity == item}
      onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent> | any) =>
        setCapacity(e.target?.value)
      }
    />
  ));
};

export const CheckboxListReview = ({ review, setReview }: any) => {
  const list = [
    {
      value: 3,
      label: (
        <div style={{ display: "flex" }}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <p>и больше</p>
        </div>
      ),
    },
    {
      value: 4,
      label: (
        <div style={{ display: "flex" }}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <p>и больше</p>
        </div>
      ),
    },
    {
      value: 5,
      label: (
        <div style={{ display: "flex" }}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      ),
    },
  ];

  return list.map((item: any, index: number) => (
    <CCheckbox
      key={index}
      label={item.label}
      value={item.value}
      checked={review == item.value}
      onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent> | any) =>
        setReview(e.target?.value)
      }
    />
  ));
};

function PopularFilters({
  capacity,
  setCapacity,
  square,
  setSquare,
  rent,
  setRent,
  review,
  setReview,
}: any) {
  const data = [
    {
      value: "Цена 1 часа аренды",
      description: (
        <CSlider
          size={3}
          step={100}
          min={1600}
          max={3800}
          marks={[
            { value: 0, label: "1600" },
            { value: 3800, label: "3800" },
          ]}
          value={rent}
          onChange={setRent}
        />
      ),
    },
    {
      value: "Вместимость",
      description: (
        <CheckboxListCapacity capacity={capacity} setCapacity={setCapacity} />
      ),
    },
    {
      value: "Площадь (кв.м)",
      description: (
        <CSlider
          size={3}
          step={100}
          min={1600}
          max={3800}
          marks={[
            { value: 0, label: "1600" },
            { value: 3800, label: "3800" },
          ]}
          value={square}
          onChange={setSquare}
        />
      ),
    },
    {
      value: "Рейтинг по отзывам",
      description: <CheckboxListReview review={review} setReview={setReview} />,
    },
  ];

  return <CAccordion items={data} />;
}

export default PopularFilters;
