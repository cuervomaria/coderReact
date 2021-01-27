import React, {useState} from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import "./itemCount.css";

const ItemCount = ({stock, initial=1, onAdd2}) => {

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



// const onAdd =() =>{
//     cantidad === 0 ? alert("debe agregar productos para poder agregarlos al carrito") : console.log(cantidad) 
    
// }

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
                        <Button variant="outline-dark"  onClick={onAdd2(cantidad)}>Agregar {cantidad} productos</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    )
};




export default ItemCount