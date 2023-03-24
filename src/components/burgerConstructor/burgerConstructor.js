import styles from "./burgerConstructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../orderDetails/orderDetails";
import React from "react";
import { IngredientStorageContext } from "../../services/IngredientStorageContext";

function BurgerConstructor() {
  const [openModal, setModal] = React.useState(false);
  const { productList, setProductList } = React.useContext(
    IngredientStorageContext
  );
  //const { menu } = React.useContext(BurgerIngredientsContext);
  const activeModal = () => {
    setModal(true);
  };

  const inactiveModal = () => {
    setModal(false);
  };

  const bunTop = productList.buns.map((item) => {
    return (
      <ConstructorElement
        key={item._id}
        type="top"
        isLocked={true}
        price={item.price}
        text={item.name}
        thumbnail={item.image}
      />
    );
  });

  const bunBottom = productList.buns.map((item) => {
    return (
      <ConstructorElement
        key={item._id}
        type="bottom"
        isLocked={true}
        price={item.price}
        text={item.name}
        thumbnail={item.image}
      />
    );
  });

  return (
    <section className={styles.order}>
      <div className={styles.components}>
        <div className={styles.component}>{bunTop[0]}</div>
      </div>

      <ul className={styles.lists}>
        {productList.content.map((obj, index) => {
          if (obj.type !== "bun") {
            return (
              <li className={styles.list} key={index}>
                <div className={styles.parametrs}></div>
                <ConstructorElement
                  text={obj.name}
                  price={obj.price}
                  thumbnail={obj.image}
                />
              </li>
            );
          }
          return null;
        })}
      </ul>

      <div className={styles.components}>
        <div className={styles.component}>{bunBottom[0]}</div>
      </div>

      <div className={styles.result}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium">{productList.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={activeModal}
        >
          Оформить заказ
        </Button>
      </div>

      {openModal && (
        <Modal closeModal={inactiveModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
