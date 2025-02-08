//переиспользуемый компонент модального окна
import button from "../../icons/cancelBtn.png";
import styles from "./modal.module.css";
import Button from "../Button/Button";
import btnYes from "../../icons/btnYes.png";

export function Modal({
  children,
  onclick,
  setShowModalDeleteCard,
  setShowModalChangeCard,
  showModalDeleteCard,
  showModalChangeCard,
}) {
  function closeModalWindow(e) {
    if (e.target === e.currentTarget) {
      if (showModalChangeCard == true) {
        setShowModalChangeCard(false);
      }
      if (showModalDeleteCard == true) {
        setShowModalDeleteCard(false);
      }
    }
  }
  return (
    <div className={styles.fullScreenModal} onClick={closeModalWindow}>
      <div className={styles.screenModal}>
        {children}
        <Button className={styles.btnCancel} onclick={closeModalWindow}>
          <img
            className={styles.btnCancel}
            src={button}
            alt="закрыть модальное окно"
            onClick={closeModalWindow}
          ></img>
        </Button>
        <Button className={styles.btnYes} onclick={onclick}>
          <img
            className={styles.btnYes}
            src={btnYes}
            alt="удалить семинар"
          ></img>
        </Button>
      </div>
    </div>
  );
}
