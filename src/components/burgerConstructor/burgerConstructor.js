import styles from "./burgerConstructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../orderDetails/orderDetails";
import React from "react";
import PropTypes from "prop-types";
import { BurgerIngredientsContext } from "../../services/BurgerIngredientsContext";

function BurgerConstructor() {
  const [openModal, setModal] = React.useState(false);
  const { menu } = React.useContext(BurgerIngredientsContext);
  console.log(menu);
  const activeModal = () => {
    setModal(true);
  };

  const inactiveModal = () => {
    setModal(false);
  };
  
  const buns = menu.filter((item) => item.type === 'bun')
console.log(buns)
  const bunBottom = menu.map((item) => {
    return(
      <ConstructorElement
                  key={item._id}
                  type="bottom"
                  isLocked={true}
                  price={item.price}
                  text={item.name}
                  thumbnail={item.image}
                />
    )
  })

  return (
    <section className={styles.order}>
      <div className={styles.components}>
        <div className={styles.component}>
       {buns.map((item) => {
        if (item._id) {
          return(
            <ConstructorElement
                        key={item._id}
                        type="top"
                        isLocked={true}
                        price={item.price}
                        text={item.name}
                        thumbnail={item.image}
                      />
          )
        }
       })}
        {/*menu.map((obj) => {
            if (obj.type === 'bun' ) {
              return (
                <ConstructorElement
                  key={obj._id}
                  type="top"
                  isLocked={true}
                  price={obj.price}
                  text={obj.name}
                  thumbnail={obj.image}
                />
              );
            }
          })*/}

          {/*menu.some((obj) => {
            if(obj.type === 'bun') {
              return (
                (obj.type === 'bun') && <ConstructorElement
                  key={obj._id}
                  type="top"
                  isLocked={true}
                  price={obj.price}
                  text={obj.name}
                  thumbnail={obj.image}
                />
              );
            }
          })*/}

          {/*menu[0] && <ConstructorElement 
                 type="top"
                 isLocked={true}
                 text={menu[0].name}
                 price={menu[0].price}
                 thumbnail={menu[0].image}
            />*/}
        </div>
      </div>

      <ul className={styles.lists}>
        {menu.map((obj) => {
          if (obj.type !== "bun") {
            return (
              <li className={styles.list} key={obj._id}>
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
        <div className={styles.component}>
          {bunBottom[0]}
        </div>
      </div>

      <div className={styles.result}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium">19010</p>
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

BurgerConstructor.propTypes = {
  menu: PropTypes.object.isRequired,
};

export default BurgerConstructor;
