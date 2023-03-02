import styles from "./burgerConstructor.module.css";
import { ConstructorElement, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import data from "../utils/data";

function BurgerConstructor() {
  return (
    <section className={styles.order}>
      <div className={styles.components}>
        <div className={styles.component}>
            <ConstructorElement 
                 type="top"
                 isLocked={true}
                 text={data[0].name}
                 price={data[0].price}
                 thumbnail={data[0].image}
            />
        </div>
      </div>

      <ul className={styles.lists}>
        {data.map((obj) => {
          if (obj.type !== 'bun') {
            return (
                <li className={styles.list} key={obj._id}>
                    <div className={styles.parametrs}></div>
                    <ConstructorElement 
                           text={obj.name}
                           price={obj.price}
                           thumbnail={obj.image}
                    />
                </li>
            )}
          }
        )}
      </ul>

      <div className={styles.components}>
        <div className={styles.component}>
            <ConstructorElement 
                 type="bottom"
                 isLocked={true}
                 text={data[0].name}
                 price={data[0].price}
                 thumbnail={data[0].image}
            />
        </div>
      </div>

      <div className={styles.result}>
        <div className={styles.price}>
        <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
