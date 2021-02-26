import React, { useContext } from "react";
import { Card, Container} from "react-bootstrap"
import ItemCount from "../itemCount/ItemCount";
import "./itemDetail.css"
import { CartContext } from "../../context/CartContext";

// Tarjeta del producto. Es renderizada en el ItemDetailContainer, quien le pasa toda la información del producto por props.
//Renderiza el ItemCount, le pasa por props el stock y la cantidad inicial a mostrar, la cual depende de si el producto ya ha sido agregado al carrito (en cuyo caso muestra la cantidad agregada) o no ha sido agregado aún (en cuyo caso muestra 1).
//Al darle click en agregar producto, agrega el mismo al cartContext (producto que recibe del ItemDetailContainer y cantidad que recibe del ItemCount)

const ItemDetail = ({ producto }) => {

    const { cart, addItem } = useContext(CartContext)

    //Función que pasa por callback al ItemCount. Al invocarla agrega el producto con la cantidad indicada al cartContext.

    const capturarQ = (value) => {
        console.log("producto", producto)
        console.log("cantidad", value)
        addItem(producto, value)
    }

    // Utils - para determinar el valor a mostrar como inicial en el ItemCount dependiendo si el producto ya está en el carrito o no.
    const index = cart.findIndex(prod => prod.id === producto.id)
    const initial = index === -1 ? 1 : cart[index].cantidad

    return (
        <Container>
            <Card className="cardItemDetail">
                <Card.Img variant="top" src={producto.img} className="fotoItemDetail" />
                <Card.Body>
                    <Card.Title>{producto.linea}</Card.Title>
                    <Card.Title>{producto.varietal}</Card.Title>
                    <hr />
                    <Card.Text>
                        <b>Descripción:</b>{` ${producto.descripcion}`}
                    </Card.Text>
                    <hr />
                    <Card.Text>
                        <b>Precio:</b> $ {new Intl.NumberFormat("de-DE").format(producto.precio)}
                    </Card.Text>
                    <ItemCount stock={producto.stock} onAdd2={capturarQ} initial={initial} />
                </Card.Body>
            </Card>
        </Container>

    )
}

export default ItemDetail