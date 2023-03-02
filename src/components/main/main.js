import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import styles from "./main.module.css"

function Main() {
  return (
  <main className={styles.main}>
    <BurgerIngredients />
    <BurgerConstructor />
  </main>
  )
}

export default Main;
