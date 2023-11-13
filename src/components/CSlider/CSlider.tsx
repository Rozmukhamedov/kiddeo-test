import "./style.css";
import { FC } from "react";
import { Slider, SliderProps } from "@mantine/core";

interface CSliderProps extends SliderProps {}

const CSlider: FC<CSliderProps> = ({ ...props }) => {
  return <Slider className="slider" color="#F2766A" {...props} />;
};

export default CSlider;
