import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BarraNavegacion2 } from "./components/navbar/Navbar2";
import { BarraNavegacion } from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import ItemListContainer2 from "./components/itemListContainer/ItemListContainer2"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import OrderCheckContainer from "./components/orderCheckContainer/OrderCheckContainer"
import Cart from "./components/cart/Cart";
import CheckoutContainer from "./components/checkoutContainer/CheckoutContainer";
import Prueba from "./prueba";

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
              <Route path="/checkout">
                <CheckoutContainer />
              </Route>

              <Route path="/category/:categoryName">
                {/* <ItemListContainer greetings={"Bienvenido a la tienda online de Viña Cobos!"} /> */}
                <ItemListContainer2 greetings={"Bienvenido a la tienda online de Viña Cobos!"} />
              </Route>

              <Route path="/orderCheck">
                <OrderCheckContainer />
              </Route>


              <Route path="/">
                {/* <Prueba /> */}
                <ItemListContainer2 greetings={"Bienvenido a la tienda online de Viña Cobos!"} />
                {/* <ItemListContainer greetings={"Bienvenido a la tienda online de Viña Cobos!"} /> */}
              </Route>

            </Switch>

          </div>
        </CartContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
