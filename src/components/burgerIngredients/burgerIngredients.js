import React from "react";
import data from "../utils/data"
import IngredientCard from "../ingredientCard/ingredientCard"
import {
  Tab
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burgerIngredients.module.css";

function BurgerIngredients() {
  const [current, setCurrent] = React.useState("one");
  return (
    <section className={styles.burgerIngredients}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>

      <div className={styles.menu}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
        <div className={styles.ingredients}>
      <h2 className="text text_type_main-medium">Булки</h2>
      <ul className={styles.lists}>
        {data.map((obj) => {
            if (obj.type === 'bun') {
                return <IngredientCard  key={obj._id} {...obj}/>
            }
        })}
      </ul>
      <h2 className="text text_type_main-medium">Соусы</h2>
      <ul className={styles.lists}>
        {data.map((obj) => {
            if (obj.type === 'sauce') {
                return <IngredientCard  key={obj._id} {...obj}/>
            }
        })}
      </ul>
      <h2 className="text text_type_main-medium">Начинки</h2>
      <ul className={styles.lists}>
        {data.map((obj) => {
            if (obj.type === 'main') {
                return <IngredientCard  key={obj._id} {...obj}/>
            }
        })}
      </ul>
      </div>
    </section>
  );
}

export default BurgerIngredients;
