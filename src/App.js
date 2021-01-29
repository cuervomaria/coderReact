import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BarraNavegacion } from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";

function App() {
  return (


    <div className="App">
      <BrowserRouter>
        <div className="barraNavegacion">
          <BarraNavegacion />
        </div>
        <div className="principal">
          <Switch>
            <CartContextProvider>
              <Route path="/item/:id">
                <ItemDetailContainer />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </CartContextProvider>
            <Route path="/category/:categoryId">
              <ItemListContainer greetings={"Bienvenido a la tienda online de Viña Cobos!"} />
            </Route>
            <Route path="/">
              <ItemListContainer greetings={"Bienvenido a la tienda online de Viña Cobos!"} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
