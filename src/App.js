import './App.css';
import { BrowserRouter, Switch, Route  } from "react-router-dom";
import { BarraNavegacion } from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <div className="barraNavegacion">
        <BarraNavegacion />
      </div>
      <div className="principal">
        <ItemListContainer greetings={"Bienvenido a la tienda online de Viña Cobos!"} /></div>
        <ItemDetailContainer />
    </div>

    // <div className="App">
    // <BrowserRouter>
    //   <div className="barraNavegacion">
    //     <BarraNavegacion />
    //   </div>
    //   <Switch>
        
    //     <Route path="/item">
    //       <ItemDetailContainer />
    //     </Route>
    //     <Route path="/">
    //       <div className="principal">
    //         <ItemListContainer greetings={"Bienvenido a la tienda online de Viña Cobos!"} />
    //       </div>
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
  // </div>
  );
}

export default App;
