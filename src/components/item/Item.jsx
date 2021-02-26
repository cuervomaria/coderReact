import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./item.css"

//Componente de la tarjeta. Recibe un objeto producto por props y de allí obtiene todos los datos que se muestran en la tarjeta

const Item = ({ producto }) => {
    return (
        <Card className="cardCatalogo">
            <Link to={`/item/${producto.id}`}>
                <Card.Img variant="top" src={`${producto.img}`} className="foto" />
                <Card.Body>
                    <Card.Title><b>{producto.linea}</b></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{producto.varietal}</Card.Subtitle>
                    <Card.Text>
                        {producto.finca ? producto.finca :
                            producto.zona ? producto.zona : <br />}
                    </Card.Text>
                    <hr />
                    <Card.Text>
                        $ {new Intl.NumberFormat("de-DE").format(producto.precio)}
                    </Card.Text>
                </Card.Body>
            </Link>
        </Card>
    )
}

export default Item