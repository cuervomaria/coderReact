import React, {useState} from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import "./itemCount.css";

const ItemCount = ({stock, initial}) => {

const [cantidad, setCantidad] = useState (initial);

const aumentar = ()=>{
    
    if(cantidad<stock){
        setCantidad(cantidad+1);
    }else{
        alert("No es posible agregar más productos");
    }
};

const disminuir = ()=>{
    
    if(cantidad===0){
        alert("Ud no tiene productos agregados");
    }else{
        setCantidad(cantidad-1);
    }
};

const onAdd =() =>{
    cantidad === 0 ? alert("debe agregar productos para poder agregarlos al carrito") : console.log(cantidad)
    
}

    return (
        <div className="itemCount">
            <Container >
                <Row className="d-flex justify-content-between ">
                    <Col xs={1} className="text-center" onClick={disminuir}>-</Col>
                    <Col xs={1} className="text-center"  ><span className="text-center" > {cantidad} </span></Col>
                    <Col xs={1} className="text-center" onClick={aumentar}>+</Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <Button variant="outline-dark" onClick={onAdd}>Agregar</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    )
};




export default ItemCount