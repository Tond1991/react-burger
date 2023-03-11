import styles from "./ingredientDetails.module.css";
import Image from "../image/image";
import PropTypes from 'prop-types';


const IngredientDetails = ({item}) => {
  return (
    <div>
      <div className={styles.title}>
        <h2 className="text text_type_main-large">Детали ингредиента</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image image={item.image_large} alt={item.name} />
        </div>
        <p
          className={`text text_type_main-medium mt-4 ${styles.subtitle}`}
        >
          {item.name}
        </p>
        <ul className={styles.descriptions}>
          <li className={styles.description}>
            <p className="text text_type_main-default text_color_inactive">
              Калории,ккал
            </p>
            <p className="text text_type_main-default text_color_inactive">
              {item.calories}
            </p>
          </li>

          <li className={styles.description}>
            <p className="text text_type_main-default text_color_inactive">
              Белки, г
            </p>
            <p className="text text_type_main-default text_color_inactive">
              {item.proteins}
            </p>
          </li>

          <li className={styles.description}>
            <p className="text text_type_main-default text_color_inactive">
              Жиры, г
            </p>
            <p className="text text_type_main-default text_color_inactive">
              {item.calories}
            </p>
          </li>

          <li className={styles.description}>
            <p className="text text_type_main-default text_color_inactive">
              Углеводы, г
            </p>
            <p className="text text_type_main-default text_color_inactive">
              {item.calories}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
   item: PropTypes.object.isRequired,
};

export default IngredientDetails;
