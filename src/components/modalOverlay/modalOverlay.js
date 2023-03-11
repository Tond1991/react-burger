import styles from "./modalOverlay.module.css";

const ModalOverlay = (props) => {
  return (
    <div onClick={(e) => e.stopPropagation()} className={styles.modalOverlay}>
      {props.children}
    </div>
  );
};

export default ModalOverlay;
