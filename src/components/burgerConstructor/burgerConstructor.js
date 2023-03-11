import styles from "./burgerConstructor.module.css";
import { ConstructorElement, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../orderDetails/orderDetails";
import React from 'react';
import PropTypes from 'prop-types';


function BurgerConstructor({data}) {
  const [openModal, setModal] = React.useState(false);

  const activeModal = () => {
    setModal(true);
  }

  const inactiveModal = () => {
    setModal(false);
  }

  
  const escBtn = e => {
    if ((e.charCode || e.keyCode) === 27) {
      setModal(false);
    }
  }

  React.useEffect(() => {
    document.body.addEventListener("keydown", escBtn);
    return function cleanHeandler() {
      document.body.removeEventListener("keydown", escBtn)
    }
  }, [])

  return (
    <section className={styles.order}>
      <div className={styles.components}>
        <div className={styles.component}>
            { data[0] && <ConstructorElement 
                 type="top"
                 isLocked={true}
                 text={data[0].name}
                 price={data[0].price}
                 thumbnail={data[0].image}
            />}
        </div>
      </div>

      <ul className={styles.lists}>
        {data.map((obj) => {
          if (obj.type !== 'bun') {
            return (
                <li className={styles.list} key={obj._id}>
                    <div className={styles.parametrs}></div>
                    <ConstructorElement 
                           text={obj.name}
                           price={obj.price}
                           thumbnail={obj.image}
                    />
                </li>
            )}
            return null
          }
        )}
      </ul>

      <div className={styles.components}>
        <div className={styles.component}>
            {data[0]  && <ConstructorElement 
                 type="bottom"
                 isLocked={true}
                 text={data[0].name}
                 price={data[0].price}
                 thumbnail={data[0].image}
            />}
        </div>
      </div>

      <div className={styles.result}>
        <div className={styles.price}>
        <p className="text text_type_digits-medium">19010</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={activeModal}>
          Оформить заказ
        </Button>
      </div>
              
              <Modal openModal={openModal} closeModal={inactiveModal}>
                <OrderDetails />
              </Modal>

    </section>
  );
}


BurgerConstructor.propTypes = {
   data: PropTypes.object.isRequired,
};

export default BurgerConstructor;
