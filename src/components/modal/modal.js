import ModalOverlay from "../modalOverlay/modalOverlay";
import styles from './modal.module.css'
import PropTypes from 'prop-types';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("react-modals");

const Modal = (props) => {
  const { openModal, closeModal } = props;


  if (openModal) {
  return ReactDOM.createPortal(
    <div className={styles.modal} onClick={closeModal} > 
    <ModalOverlay>
        <button className={styles.btn} type='button' onClick={closeModal}>
            <CloseIcon type="primary"/>
        </button>
        {props.children}
    </ModalOverlay>
    </div>
    , modalRoot
  );
}
};

Modal.propTypes = {
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
 };

export default Modal;
