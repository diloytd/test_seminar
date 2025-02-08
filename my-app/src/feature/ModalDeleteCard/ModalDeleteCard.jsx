//Функция ModalDeleteCard подтверждает необходимость удаления семинара. В ней находится асинхронная функция deleteSeminar, которая выполняет  fetch запрос с методом  DELETE. <MODAL> переиспользуемые компонент(находится в папке  shared) 
import { deleteSeminar } from "../Seminar-management/api/cardList.api.jsx";
import { Modal } from "../../shared/Modal/Modal.jsx";

export function ModalDeleteCard({ id, setShowModalDeleteCard, showModalDeleteCard}) {
  async function handleDeleteSeminar() {
    try {
      await deleteSeminar(id);
    } catch {
      throw new Error("ошибка! Удалить не получилось");
    }
  }
  return (
    <Modal
      onclick={handleDeleteSeminar}
      setShowModalDeleteCard={setShowModalDeleteCard}
      showModalDeleteCard={showModalDeleteCard}
    >
      Вы действительно хотите удалить семинар?
    </Modal>
  );
}
