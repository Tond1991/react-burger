import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import styles from "./main.module.css"
import PropTypes from 'prop-types';



function Main({menu}) {

  return (
  <main className={styles.main}>
    <BurgerIngredients data={menu}/>
    <BurgerConstructor data={menu}/>
  </main>
  )
}

Main.propTypes = {
  menu: PropTypes.object.isRequired,
}

export default Main;
