import ModalOverlay from "../modalOverlay/modalOverlay";
import styles from './modal.module.css'
import PropTypes from 'prop-types';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom";
import React from "react";


const modalRoot = document.getElementById("react-modals");

const Modal = (props) => {
  const { closeModal } = props;

   React.useEffect(() => {
    const escBtn = (evt) => {
      if (evt.key === "Escape") {
        closeModal();
      }
    };
    document.body.addEventListener("keydown", escBtn);

    return function cleanHeandler() {
      document.body.removeEventListener("keydown", escBtn);
    };
  }, [closeModal]);

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


Modal.propTypes = {
    closeModal: PropTypes.func.isRequired
 };

export default Modal;
