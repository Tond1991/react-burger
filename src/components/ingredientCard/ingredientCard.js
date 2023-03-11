import styles from "./ingredientCard.module.css";
import Image from "../image/image";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';


function IngredientCard({ image, name, price, _id, onClick }) {
  return (
    <li className={styles.card} key={_id} onClick={onClick}>
      <Counter count={1} size="default" extraClass="m-1" />
      <Image className={styles.image} image={image} name={name} />
      <div className={styles.price}>
        <p className="text text_type_digits-default">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default pb-8 ${styles.title}`}>{name}</p>
    </li>
  );
}

IngredientCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}


export default IngredientCard;
