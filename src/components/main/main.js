import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import styles from "./main.module.css";
import PropTypes from "prop-types";
import React from "react";
import { IngredientStorageContext } from "../../services/IngredientStorageContext";

function Main() {
  const [productList, setProductList] = React.useState({
    content: [],
    price: 0
  })
  return (
    <main className={styles.main}>
      <IngredientStorageContext.Provider value={{productList, setProductList}}>
      <BurgerIngredients />
      <BurgerConstructor />
      </IngredientStorageContext.Provider>
    </main>
  );
}

Main.propTypes = {
  menu: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    image_large: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired
  }),
};

export default Main;
