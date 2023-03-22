import React from "react";
import IngredientCard from "../ingredientCard/ingredientCard";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burgerIngredients.module.css";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredientDetails/ingredientDetails";
import { BurgerIngredientsContext } from "../../services/BurgerIngredientsContext";

function BurgerIngredients() {
  const BUN = "bun";
  const SAUCE = "sauce";
  const MAIN = "main";
  const [current, setCurrent] = React.useState(BUN);
  const [objItem, setObjItem] = React.useState(null);
  const {menu} = React.useContext(BurgerIngredientsContext);


  const activeModal = (obj) => {
    setObjItem(obj);
  };

  const inactiveModal = () => {
    setObjItem(null);
  };

  return (
    <section className={styles.burgerIngredients}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>

      <div className={styles.products}>
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
          {menu.map((obj) => {
            if (obj.type === BUN) {
              return <IngredientCard key={obj._id} {...obj} onClick={() => activeModal(obj) }/>;
            }
            return null;
          })}
        </ul>
        <h2 className="text text_type_main-medium">Соусы</h2>
        <ul className={styles.lists}>
          {menu.map((obj) => {
            if (obj.type === SAUCE) {
              return <IngredientCard key={obj._id} {...obj} onClick={() => activeModal(obj)}/>;
            }
            return null;
          })}
        </ul>
        <h2 className="text text_type_main-medium">Начинки</h2>
        <ul className={styles.lists}>
          {menu.map((obj) => {
            if (obj.type === MAIN) {
              return <IngredientCard key={obj._id} {...obj} onClick={() => activeModal(obj)}/>;
            }
            return null;
          })}
        </ul>
      </div>
      
      {objItem && <Modal closeModal={inactiveModal}>
        <IngredientDetails item={objItem}/>
      </Modal>}
    </section>
  );
}


export default BurgerIngredients;
