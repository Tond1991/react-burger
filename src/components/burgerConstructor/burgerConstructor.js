import styles from "./burgerConstructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../orderDetails/orderDetails";
import React from "react";
import { BurgerIngredientsContext } from "../../services/BurgerIngredientsContext";
import { IngredientStorageContext } from "../../services/IngredientStorageContext";
import {dataId} from "../utils/data.js"

function BurgerConstructor() {
  const [openModal, setModal] = React.useState(false);
  const {productList, setProductList} = React.useContext(IngredientStorageContext);
  const { menu } = React.useContext(BurgerIngredientsContext);
  const activeModal = () => {
    setModal(true);
  };

  const inactiveModal = () => {
    setModal(false);
  };

  const order = {
    content: [],
    price: 0
  };

  const addIngredients = (ingredients) =>{
    dataId.content.forEach(element => {
      order.content.push(ingredients.find(el => {
        if (el._id === element.id) {
          order.price += el.price;
          return true
        }
        return false
      }))
    })
    setProductList(order)
  };

React.useEffect(()=>{addIngredients(menu)},[])



  const buns = menu.filter((item) => item.type === 'bun')
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
       {buns[0]}
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
