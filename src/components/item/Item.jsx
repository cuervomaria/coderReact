import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import ItemCount from "../itemCount/ItemCount"
import "./item.css"

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
                        producto.zona ? producto.zona : <br/> }
                    <hr />
                        $ {new Intl.NumberFormat("de-DE").format(producto.precio)}

                </Card.Text>
          
            </Card.Body>
            </Link>
                
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