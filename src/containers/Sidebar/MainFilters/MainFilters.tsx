import styles from "./style.module.css";
import regionsList from "../../../utils/regions.json";
import timeList from "../../../utils/time.json";
import { CDatePicker, CSelect } from "../../../components";

function MainFilters({
  holiday,
  setHoliday,
  region,
  setRegion,
  startHour,
  setStartHour,
  endHour,
  setEndHour,
}: any) {
  return (
    <div className={styles.main__Filters}>
      <h4>Параметры подбора</h4>
      <CDatePicker
        value={holiday}
        onChange={setHoliday}
        label="Дата и время праздника"
      />
      <div className={styles.times}>
        <CSelect
          options={timeList}
          value={startHour}
          label={"Начнем в"}
          onChange={setStartHour}
        />
        <CSelect
          options={timeList}
          value={endHour}
          label={"Закончим в"}
          onChange={setEndHour}
        />
      </div>
      <CSelect
        options={regionsList}
        value={region}
        label={"Район"}
        onChange={setRegion}
      />
    </div>
  );
}

export default MainFilters;
