import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftLinks}>
          <a href="#" className={styles.link}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default">Конструктор</p>
          </a>
          <a href="#" className={styles.link}>
            <ListIcon type="secondary"/>
            <p className="text text_type_main-default text_color_inactive">
              Лента&nbsp;заказов
            </p>
          </a>
        </div>
        <Logo />
        <a href="#" className={styles.link}>
            <ProfileIcon ProfileIcon type="secondary"/>
            <p className="text text_type_main-default text_color_inactive">
              Лента&nbsp;заказов
            </p>
      </a>
      </div>
    </header>
  );
}

export default Header;
