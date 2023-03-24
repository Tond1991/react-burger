import styles from "./orderDetails.module.css";
import { IngredientStorageContext } from "../../services/IngredientStorageContext";
import React from 'react';



const OrderDetails = () => {
  const { productList } = React.useContext(
    IngredientStorageContext
  );
  return (
    <div className={styles.container}>
      <p className={`text text_type_digits-large ${styles.order}`}>{productList.orderNumber.order.number}</p>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <div className={styles.done}></div>
      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mt-2">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;
