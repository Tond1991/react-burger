import React from "react";
import IngredientCard from "../ingredientCard/ingredientCard";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burgerIngredients.module.css";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredientDetails/ingredientDetails";

function BurgerIngredients({ data }) {
  const BUN = "bun";
  const SAUCE = "sauce";
  const MAIN = "main";
  const [current, setCurrent] = React.useState(BUN);
  const [openModal, setModal] = React.useState(false);
  const [objItem, setObjItem] = React.useState([]);

  const activeModal = (obj) => {
    setModal(true);
    setObjItem(obj);
  };

  const inactiveModal = () => {
    setModal(false);
  };

  const escBtn = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      setModal(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("keydown", escBtn);
    return function cleanHeandler() {
      document.body.removeEventListener("keydown", escBtn);
    };
  });
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
              return <IngredientCard key={obj._id} {...obj} onClick={() => activeModal(obj)}/>;
            }
            return null;
          })}
        </ul>
        <h2 className="text text_type_main-medium">Соусы</h2>
        <ul className={styles.lists}>
          {data.map((obj) => {
            if (obj.type === SAUCE) {
              return <IngredientCard key={obj._id} {...obj} onClick={() => activeModal(obj)}/>;
            }
            return null;
          })}
        </ul>
        <h2 className="text text_type_main-medium">Начинки</h2>
        <ul className={styles.lists}>
          {data.map((obj) => {
            if (obj.type === MAIN) {
              return <IngredientCard key={obj._id} {...obj} onClick={() => activeModal(obj)}/>;
            }
            return null;
          })}
        </ul>
      </div>
      <Modal openModal={openModal} closeModal={inactiveModal}>
        <IngredientDetails item={objItem}/>
      </Modal>
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BurgerIngredients;
