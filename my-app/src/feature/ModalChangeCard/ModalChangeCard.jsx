// Функция ModalChangeCard используется для изменения данных. В ней вызывается функция editFetchSeminar, которая выполняет
// запрос Patch на изменения данных. Переиспользуемый компонент  MODAL. Состояние ChangeInfo сохраняет новую информацию, введенную из формы

import styles from "./modalChangeCard.module.css";
import { Modal } from "../../shared/Modal/Modal";
import { useState } from "react";
import { editFetchSeminar } from "../Seminar-management/api/cardList.api";
export function ModalChangeCard({
  setShowModalChangeCard,
  showModalChangeCard,
  id,
}) {
  const [changeInfo, setChangeInfo] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
  });
  async function sendNewInfo() {
    try {
      await editFetchSeminar({ newInfo: changeInfo, id: id });
    } catch {
      throw new Error("ошибка  функции SendNewInfo");
    }
  }
  return (
    <>
      <Modal
        setShowModalChangeCard={setShowModalChangeCard}
        showModalChangeCard={showModalChangeCard}
        onclick={sendNewInfo}
      >
        <form className={styles.form}>
          <label htmlFor="title"></label>
          <input
            type="text"
            placeholder="введите название"
            id="title"
            value={changeInfo.title}
            onChange={(e) =>
              setChangeInfo({ ...changeInfo, title: e.target.value })
            }
          ></input>
          <label htmlFor="description"></label>
          <input
            type="text"
            placeholder="введите описание"
            id="description"
            value={changeInfo.description}
            onChange={(e) =>
              setChangeInfo({ ...changeInfo, description: e.target.value })
            }
          ></input>
          <label htmlFor="date"></label>
          <input
            type="date"
            placeholder="введите дата"
            id="date"
            value={changeInfo.date}
            onChange={(e) =>
              setChangeInfo({ ...changeInfo, date: e.target.value })
            }
          ></input>
          <label htmlFor="time"></label>
          <input
            type="time"
            placeholder="введите дата"
            id="time"
            value={changeInfo.time}
            onChange={(e) =>
              setChangeInfo({ ...changeInfo, time: e.target.value })
            }
          ></input>
        </form>
      </Modal>
    </>
  );
}
