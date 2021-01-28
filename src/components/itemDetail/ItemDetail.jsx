import React, { useState } from "react";
import { Card, Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import ItemCount from "../itemCount/ItemCount";
import "./itemDetail.css"

const ItemDetail = ({ producto }) => {

    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
    const [showButton, setShowButton]= useState (false)
   // let validarClick = false

    const capturarQ = (value) => {
        setCantidadSeleccionada(value)
        setShowButton(true)
       
    }

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
                    { showButton? 
                       <Link to="/cart"><Button variant="outline-dark">Terminar mi compra de {cantidadSeleccionada} productos</Button></Link>:
                       <ItemCount stock={producto.cantidad} onAdd2={capturarQ} />                    }
                    
                </Card.Body>
            </Card>
        </Container>



        // <div>
        //     <img src={producto.img} alt={`${producto.linea} - ${producto.varietal}`}/>
        //     <h3>{producto.linea}</h3>
        //     <h4>{producto.varietal}</h4>
        //     <p><b>Precio:</b>{`$ ${producto.precio}`}</p>
        //     <p><b>Descripción:</b>{`${producto.descripcion}`}</p>

        // </div>

    )
}

export default ItemDetail