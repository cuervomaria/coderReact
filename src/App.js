import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BarraNavegacion2 } from "./components/navbar/Navbar2";
import { BarraNavegacion } from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";

function App() {
  return (


    <div className="App">

      <BrowserRouter>
        <CartContextProvider>
          <div className="barraNavegacion">
            <BarraNavegacion2 />
            {/* <BarraNavegacion /> */}
          </div>
          <div className="principal">

            <Switch>

              <Route path="/item/:id">
                <ItemDetailContainer />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>

              <Route path="/category/:categoryId">
                <ItemListContainer greetings={"Bienvenido a la tienda online de Viña Cobos!"} />
              </Route>
              <Route path="/">
                <ItemListContainer greetings={"Bienvenido a la tienda online de Viña Cobos!"} />
              </Route>

            </Switch>

          </div>
        </CartContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
