//Функция CardList вызывает функию fetchSeminars(которая отправляет  get запрос на получение данных) и map-ом проходится по данным, передавая компоненту CardItem. Данные записываются в состояние infoSeminar
import { useEffect, useState } from "react";
import { fetchSeminars } from "../Seminar-management/api/cardList.api";
import CardItem from "../CardItem/CardItem";
import styles from "./cardList.module.css";

export function CardList() {
  const [infoSeminar, setInfoSeminar] = useState([
    {
      title: "",
      description: "",
      date: "",
      time: "",
      id: "",
      photo: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getInfoSeminar() {
      try {
        setIsLoading(true);
        const getInfoSeminar = await fetchSeminars();
        setInfoSeminar(getInfoSeminar);
      } catch {
        throw new Error("ошибка полуения данных");
      } finally {
        setIsLoading(false);
      }
    }
    getInfoSeminar();
  }, []);

  return (
    <>
      <div className={styles.cardList}>
        {isLoading
          ? "Идет Загрузка..."
          : infoSeminar.map((item) => (
              <CardItem key={item.id} item={item} id={item.id}></CardItem>
            ))}
      </div>
    </>
  );
}
