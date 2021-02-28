import React, { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./itemCount.css";

// Componente que maneja la cantidad a agregar al carrito. Es renderizado por ItemDetail --> ItemDetailContainer. Recibe por props el stock del producto, el valor inicial del contador (dependiendo si el producto ya está o no en el carrito) y pasa por la función callback la cantidad seleccionada al componente ItemDetail.
//Agrega o elimina cantidad, teniendo como restricción que no se puede seleccionar para un producto más que el stock disponible, ni menos que 0.
//Si la cantidad seleccionada es 0, se deshabilita el botón de agregar. Si un producto ya fue agregado al carrito la cantidad mostrada como inicial es la que tiene en el carrito, si se agrega una cantidad distinta del mismo producto actualiza la cantidad al nuevo valor seleccionado



const ItemCount = ({ stock, initial, onAdd2 }) => {
    const [cantidad, setCantidad] = useState(initial);

    const aumentar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        } else {
            alert("No es posible agregar más productos, stock insuficiente");
        }
    };

    const disminuir = () => {
        if (cantidad === 0) {
            alert("Ud no tiene productos agregados");
        } else {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div className="itemCount">
            <Container >
                <Row className="d-flex justify-content-between ">
                    <Col xs={4} className="text-center btnAumentarDisminuir" onClick={disminuir}>-</Col>
                    <Col xs={4} className="text-center"  ><span className="text-center" > {cantidad} </span></Col>
                    <Col xs={4} className="text-center btnAumentarDisminuir" onClick={aumentar}>+</Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center ">
                        <Button variant="outline-dark" onClick={() => onAdd2(cantidad)} disabled={cantidad === 0 ? true : false}>Agregar {cantidad} productos</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    )
};




export default ItemCount