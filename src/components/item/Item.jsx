import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount"
import "./item.css"

const Item = ({ producto }) => {
    return (

        
        <Card className="cardCatalogo">
            <Link to={`/item/${producto.id}`}>
            <Card.Img variant="top" src={`${producto.img}`} className="foto" />
            <Card.Body>
                <Card.Title><b>{producto.linea}-{producto.varietal}</b></Card.Title>
                <Card.Text>
                    {producto.finca ? producto.finca :
                        producto.zona ? producto.zona : null}
                    <br />
                        ${producto.precio}

                </Card.Text>
          
            </Card.Body>
            </Link>
                <Card.Footer>
                    <ItemCount stock={producto.cantidad} initial={1}/>
                </Card.Footer>
        </Card>
        

        //     {/* 
        //  <div>
        //     <img src={producto.img} alt={`${producto.linea}-${producto.varietal}`} />
            
        //     <h3>{producto.linea}-{producto.varietal}</h3>
        //      <p>{producto.finca? producto.finca : 
        //              producto.zona? producto.zona : null}
        //      </p>
        //      <p>${producto.precio}</p>
        //  </div> */}

    )
}

export default Item