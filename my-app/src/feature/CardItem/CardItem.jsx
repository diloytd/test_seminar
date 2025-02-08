// CardItem - реализация карточки с полученной информации с сервера. Также передает иформацию ниже двум модальным окнам, которые удаляют и изменяют информацию. Здесь же созданы 2 состояния для этих модальных окон: showModalDeleteCard, showModalChangeCard. Button переиспользуемый компонент, который лежит в папке
import Button from "../../shared/Button/Button";
import button from "../../icons/cancelBtn.png";
import editBtn from "../../icons/editBtn.png";
import styles from "./cardItem.module.css";
import { useState } from "react";
import { ModalDeleteCard } from "../ModalDeleteCard/ModalDeleteCard";
import { ModalChangeCard } from "../ModalChangeCard/ModalChangeCard";
import { memo } from "react";
const CardItem = memo(function CardItem({ item, id }) {
  const [showModalDeleteCard, setShowModalDeleteCard] = useState(false);
  const [showModalChangeCard, setShowModalChangeCard] = useState(false);

  function editSeminar() {
    setShowModalChangeCard(!false);
  }

  return (
    <>
      <div className={styles.card}>
        <div className={styles.headerCard}>
          <h2>{item.title}</h2>
          <Button
            onclick={() => {
              setShowModalDeleteCard(!showModalDeleteCard);
            }}
          >
            <img src={button} alt="удалить семинар"></img>
          </Button>
        </div>
        <p>
          <b>Тема:</b> {item.description}
        </p>
        <p>
          <b>Дата и время:</b> {item.date} {item.time}
        </p>
        <img
          src={item.photo}
          alt="фото семинара"
          className={styles.imgSeminar}
        ></img>
        <Button onclick={editSeminar}>
          <img
            src={editBtn}
            className={styles.editBtn}
            title="редактировать данные"
          ></img>
        </Button>
      </div>
      {showModalDeleteCard ? (
        <ModalDeleteCard
          id={id}
          setShowModalDeleteCard={setShowModalDeleteCard}
          showModalDeleteCard={showModalDeleteCard}
        />
      ) : (
        ""
      )}
      {showModalChangeCard ? (
        <ModalChangeCard
          setShowModalChangeCard={setShowModalChangeCard}
          showModalChangeCard={showModalChangeCard}
          id={id}
        />
      ) : (
        ""
      )}
    </>
  );
});

export default CardItem;
