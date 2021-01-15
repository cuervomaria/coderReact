import './App.css';
import { BarraNavegacion } from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <div className="barraNavegacion">
        <BarraNavegacion />
      </div>
      <div className="principal">
        <ItemListContainer greetings={"Bienvenido a la tienda online de Viña Cobos!"} /></div>

    




    </div>
  );
}

export default App;
