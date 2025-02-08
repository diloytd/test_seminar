//  переиспозуемый компонент кнопки
import styles from "./button.module.css";
export default function Button({ children, onclick }) {
  return (
    <button className={styles.button} onClick={onclick}>
      {children}
    </button>
  );
}
