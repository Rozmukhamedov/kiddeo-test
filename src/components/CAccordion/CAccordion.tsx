import "./style.css";
import React from "react";
import { Accordion } from "@mantine/core";

type CAccordionProps = {
  variant?: string;
  items: { value: string; content?: React.ReactNode; bold?: boolean }[];
};

const CAccordion: React.FC<CAccordionProps> = ({
  items,
  variant = "filled",
}) => {
  return (
    <Accordion className="accordion" variant={variant}>
      {items?.map((item: any) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control className={`${item.bold ? "active" : ""}`}>
            {item.value}
          </Accordion.Control>
          <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default CAccordion;
