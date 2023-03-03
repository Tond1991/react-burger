import React from "react";
import data from "../utils/data";
import IngredientCard from "../ingredientCard/ingredientCard";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burgerIngredients.module.css";

function BurgerIngredients() {
  const BUN = "bun";
  const SAUCE = "sauce";
  const MAIN = "main";
  const [current, setCurrent] = React.useState(BUN);
  return (
    <section className={styles.burgerIngredients}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>

      <div className={styles.menu}>
        <Tab value="bun" active={current === BUN} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === SAUCE} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === MAIN} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={styles.ingredients}>
        <h2 className="text text_type_main-medium">Булки</h2>
        <ul className={styles.lists}>
          {data.map((obj) => {
            if (obj.type === BUN) {
              return <IngredientCard key={obj._id} {...obj} />;
            }
          })}
        </ul>
        <h2 className="text text_type_main-medium">Соусы</h2>
        <ul className={styles.lists}>
          {data.map((obj) => {
            if (obj.type === SAUCE) {
              return <IngredientCard key={obj._id} {...obj} />;
            }
          })}
        </ul>
        <h2 className="text text_type_main-medium">Начинки</h2>
        <ul className={styles.lists}>
          {data.map((obj) => {
            if (obj.type === MAIN) {
              return <IngredientCard key={obj._id} {...obj} />;
            }
          })}
        </ul>
      </div>
    </section>
  );
}

export default BurgerIngredients;
