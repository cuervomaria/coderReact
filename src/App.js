import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BarraNavegacion } from "./components/navbar/Navbar";
import ItemListContainer from "./containers/itemListContainer/ItemListContainer"
import ItemDetailContainer from "./containers/itemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import OrderCheckContainer from "./containers/orderCheckContainer/OrderCheckContainer"
import CartContainer from "./containers/cart/Cart";
import CheckoutContainer from "./containers/checkoutContainer/CheckoutContainer";


function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <div className="barraNavegacion">
            <BarraNavegacion />
          </div>
          <div className="principal">
            <Switch>
              <Route path="/item/:id">
                <ItemDetailContainer />
              </Route>
              <Route path="/cart">
                <CartContainer />
              </Route>
              <Route path="/checkout">
                <CheckoutContainer />
              </Route>
              <Route path="/category/:categoryName">
                <ItemListContainer greetings={"Bienvenido a la tienda online de Viña Cobos!"} />
              </Route>
              <Route path="/orderCheck">
                <OrderCheckContainer />
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
