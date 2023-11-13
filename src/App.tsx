import "./App.css";
import { useState } from "react";
import { Sidebar } from "./containers";

function App() {
  const [holiday, setHoliday] = useState<Date | null>(null);
  const [region, setRegion] = useState<string | null>(null);
  const [startHour, setStartHour] = useState<string | null>(null);
  const [endHour, setEndHour] = useState<string | null>(null);
  const [additionally, setAdditionally] = useState();
  const [capacity, setCapacity] = useState();
  const [square, setSquare] = useState();
  const [rent, setRent] = useState();
  const [review, setReview] = useState();

  return (
    <div className="app">
      <Sidebar
        holiday={holiday}
        setHoliday={setHoliday}
        region={region}
        setRegion={setRegion}
        startHour={startHour}
        setStartHour={setStartHour}
        endHour={endHour}
        setEndHour={setEndHour}
        additionally={additionally}
        setAdditionally={setAdditionally}
        capacity={capacity}
        setCapacity={setCapacity}
        square={square}
        setSquare={setSquare}
        rent={rent}
        setRent={setRent}
        review={review}
        setReview={setReview}
      />
      <section className="main">
        <h2>Main Section</h2>
        <br />
        <p>Дата и время праздника: {`${holiday}`}</p>
        <p>
          Начнем в: ID: {`${startHour}`}, Закончим в ID: {endHour}
        </p>
        <p>Район ID: {region}</p>
        <p>Цена 1 часа аренды: {rent}</p>
        <p>Вместимость: {capacity}</p>
        <p>Площадь (кв.м): {square}</p>
        <p>Рейтинг по отзывам: {review}</p>
        <p>Зонирование: {additionally}</p>
      </section>
    </div>
  );
}

export default App;
