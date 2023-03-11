import React from 'react';
import './app.module.css';
import Header from '../header/header'
import Main from '../main/main'
const URL = 'https://norma.nomoreparties.space/api/ingredients';


const App = () => {
 let [menu, setMenu] = React.useState([]);

   React.useEffect(() => {
    const getIngredients = async () => {
       try {
        const res = await fetch(URL)
        const data = await res.json();
        setMenu(data.data);
      } catch(err) {
        console.log(err.message)
          }
    }

    getIngredients();
   }, [])


  return (
   <>
    <Header />
    <Main menu={menu}/>
   </>
  );
}

export default App;
