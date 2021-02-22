import React, { useState, useContext } from "react";
import { Card, Container, Button } from "react-bootstrap"
// import { Link } from 'react-router-dom'
import ItemCount from "../itemCount/ItemCount";
import "./itemDetail.css"
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ producto }) => {

    const {cart, addItem } = useContext(CartContext)
    

    // const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
    // const [showButton, setShowButton] = useState(false)

    const capturarQ = (value) => {
        // setCantidadSeleccionada(value)
        // setShowButton(true)
        console.log("producto", producto)
        console.log("cantidad", value)
        addItem(producto, value)
        
    }
// Utils
        const index = cart.findIndex(prod=>prod.id===producto.id)
        const initial = index ===-1 ? 1 : cart[index].cantidad
        // console.log("index", index)
        // console.log("initial", initial)

    return (
        <Container>
            <Card className="cardItemDetail">
                <Card.Img variant="top" src={producto.img} className="fotoItemDetail" />
                <Card.Body>
                    <Card.Title>{producto.linea}</Card.Title>
                    <Card.Title>{producto.varietal}</Card.Title>
                    <Card.Text>
                        <hr />
                        <b>Descripción:</b>{` ${producto.descripcion}`}
                        <hr />
                        <p><b>Precio:</b>{` $ ${producto.precio}`}</p>
                    </Card.Text>
                    {/* <ItemCount stock={producto.cantidad} onAdd2={capturarQ} /> */}

                    {/* {showButton ?
                        <Button variant="outline-dark" onClick={() => addItem({ producto }, cantidadSeleccionada)}>Terminar mi compra de {cantidadSeleccionada} productos</Button> :
                        <ItemCount stock={producto.cantidad} onAdd2={capturarQ} />} */}

                       <ItemCount stock={producto.stock} onAdd2={capturarQ} initial={initial}/>
                       
                    {/* <Button variant="outline-dark" onClick={() => addItem({ producto }, cantidadSeleccionada)}>Terminar mi compra de {cantidadSeleccionada} productos</Button> */}

                        {/* <p>Cantidad seleccionada {cantidadSeleccionada} a agregar</p>
                    <ItemCount stock={producto.cantidad} onAdd2={()=> addItem({producto},cantidadSeleccionada)} /> */}
                </Card.Body>
            </Card>
        </Container>



        // <div>
                //     <img src={producto.img} alt={`${producto.linea} - ${producto.varietal}`} />
        //     <h3>{producto.linea}</h3>
        //     <h4>{producto.varietal}</h4>
        //     <p><b>Precio:</b>{`$ ${producto.precio}`}</p>
        //     <p><b>Descripción:</b>{`${producto.descripcion}`}</p>

        // </div>

    )
}

export default ItemDetail