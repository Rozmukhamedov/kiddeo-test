import styles from "./style.module.css";
import MainFilters from "./MainFilters";
import { CAccordion } from "../../components";
import AdditionallyFilters from "./AdditionallyFilters";
import PopularFilters from "./PopularFilters";

function Sidebar({
  holiday,
  setHoliday,
  region,
  setRegion,
  startHour,
  setStartHour,
  endHour,
  setEndHour,
  additionally,
  setAdditionally,
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
      value: "Популярные фильтры",
      bold: true,
      description: (
        <PopularFilters
          capacity={capacity}
          setCapacity={setCapacity}
          square={square}
          setSquare={setSquare}
          rent={rent}
          setRent={setRent}
          review={review}
          setReview={setReview}
        />
      ),
    },
    {
      value: "Дополнительно",
      bold: true,
      description: (
        <AdditionallyFilters
          additionally={additionally}
          setAdditionally={setAdditionally}
        />
      ),
    },
  ];

  return (
    <div className={styles.sidebar}>
      <MainFilters
        holiday={holiday}
        setHoliday={setHoliday}
        region={region}
        setRegion={setRegion}
        startHour={startHour}
        setStartHour={setStartHour}
        endHour={endHour}
        setEndHour={setEndHour}
      />
      <CAccordion items={data} />
    </div>
  );
}

export default Sidebar;
