import { SyntheticEvent, useState } from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import st from "./MainPage.module.css";
import ResultList from "../../components/ResultList/ResultList";

function MainPage() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [formResult, setFormResult] = useState<{
    hours: string;
    minutes: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handlerSumbit = (event: SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);

    const result = theorymyOfSagun(hours, minutes);

    setTimeout(() => {
      setFormResult(result);
      setLoading(false);
    }, 1200);
  };

  const handleHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHours(event.target.value);
  };

  const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(event.target.value);
  };

  const theorymyOfSagun = (
    hours: string,
    minutes: string
  ): { hours: string; minutes: string } | null => {
    if (+hours > 24 || +minutes > 59) {
      return null;
    }

    let currentHours = +hours;
    let currentMinutes = +minutes;

    const randomMinutes = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

    currentMinutes += randomMinutes;

    if (currentMinutes >= 60) {
      currentMinutes -= 60;
      currentHours += 1;
    }

    if (currentHours >= 24) {
      currentHours = 0;
    }

    const resultHours = currentHours.toString().padStart(2, "0");
    const resultMinutes = currentMinutes.toString().padStart(2, "0");

    return {
      hours: resultHours,
      minutes: resultMinutes,
    };
  };

  return (
    <>
      <AppHeader />
      <main className={st.mainPage}>
        <form className={st.formTheoremy} onSubmit={handlerSumbit}>
          <h2>Рассчитайте время по Теореме Сагуна</h2>
          <p>Во сколько встреча?</p>
          <div className={st.inputs}>
            <div className={st.containerInput}>
              <label htmlFor="hours">Часы</label>
              <input
                id="hours"
                name="hours"
                value={hours}
                onChange={handleHoursChange}
                className={st.input}
                placeholder="Введите часы"
                type="number"
                max={23}
                required
              />
            </div>
            <div className={st.containerInput}>
              <label htmlFor="minutes">Минуты</label>
              <input
                id="minutes"
                name="minutes"
                value={minutes}
                onChange={handleMinutesChange}
                className={st.input}
                placeholder="Введите минуты"
                type="number"
                max={59}
              />
            </div>
            <button className={st.button}>Рассчитать</button>
          </div>
        </form>
        {loading && (
          <div className={st.preloader}>
            <div className={st.loader}></div>
          </div>
        )}
        {formResult && !loading && <ResultList data={formResult} />}{" "}
      </main>
    </>
  );
}

export default MainPage;
