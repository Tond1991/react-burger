import React from "react";
import "./app.module.css";
import Header from "../header/header";
import Main from "../main/main";
import { BurgerIngredientsContext } from "../../services/BurgerIngredientsContext";
import { IngredientStorageContext } from "../../services/IngredientStorageContext";
import { dataId } from "../utils/data.js";

const URL = "https://norma.nomoreparties.space/api";

const App = () => {
  const [menu, setMenu] = React.useState([]);
  const [productList, setProductList] = React.useState({
    buns: [],
    content: [],
    price: 0,
    orderNumber: 0
  });

  const order = {
    buns: [],
    content: [],
    price: 0,
    orderNumber: 0
  };

  const addIngredients = (ingredients) => {
    dataId.content.forEach((element) => {
      order.content.push(
        ingredients.find((el) => {
          if (el._id === element.id) {
            order.buns = ingredients.filter((item) => item.type === "bun");
            order.price += el.price;
            return true;
          }
          return false;
        })
      );
    });
    setProductList(order);
  };

  React.useEffect(() => {
    const getIngredients = async () => {
      try {
        const res = await fetch(`${URL}/ingredients`);
        return res.ok
          ? res.json().then((data) => {
              setMenu(data.data);
              addIngredients(data.data);
            })
          : res.json().then((err) => Promise.reject(err));
      } catch (err) {
        console.log(err.message);
      }
    };

    const getOrderNumber = async () => {
      const ingredientId = productList.content.map((item) => item._id);
      try {
        const res = await fetch(`${URL}/orders`, {
          method: "POST",
          body: JSON.stringify({
            ingredients: ingredientId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        return res.ok
          ? res.json().then((data) => {
            setProductList({...productList, orderNumber: data})
          })
          : res.json().then((err) => Promise.reject(err));
      } catch (err) {
        console.log(err.message);
      }
    };
    getIngredients();
    getOrderNumber();
  }, []);

  console.log(productList);

  return (
    <>
      <Header />
      <BurgerIngredientsContext.Provider value={{ menu, setMenu }}>
        <IngredientStorageContext.Provider
          value={{ productList, setProductList }}
        >
          <Main />
        </IngredientStorageContext.Provider>
      </BurgerIngredientsContext.Provider>
    </>
  );
};

export default App;
