import React, { useContext } from 'react'
import { Table, Button, Container } from "react-bootstrap";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"
import TablaResumen from "../../components/tablaResumen/TablaResumen";
import "./cart.css";

//Renderiza el componente tablaResumen que muestra un resumen de la compra, hidratado con la información de los productos que recibe del CartContext, también le pasa por props los métodos del CartContext para eliminar productos, o vaciar el carrito. 
//Si no hay productos agregados al carrito muestra un mensaje que no hay productos agregados y muestra un botón para volver al Home.

export default function CartContainer() {

    const { cart, removeItem, total, cantidadTotal, clearCart } = useContext(CartContext)

    console.log("cart", cart)

    // Función a mostrar si el carrito está vacío
    const carritoVacio = () => {
        return (
            <>
                <tr>
                    <td colSpan="6">Ud no ha agregado ningún producto aún a su carrito </td>
                </tr>
                <tr>
                    <td colSpan="6"><Link to="../"><Button variant="outline-dark">Volver al Home </Button></Link> </td>
                </tr>
            </>
        )
    }


    //Renderiza la función carrito vacío o la tabla resumen, dependiendo de si el carrito tiene o no productos agregados al mismo.
    return (
        <Container className="mt-5">
            <div>
                <h3>Ud está por comprar los siguientes productos: </h3>
                <br/>
                {
                    cart.length === 0 ?
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>cantidad</th>
                                    <th>Precio Unitario</th>
                                    <th>Total</th>
                                    <th>Eliminar producto</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carritoVacio()}
                            </tbody>
                        </Table>

                        :
                        <TablaResumen textLastCol="Eliminar producto" array={cart} handleEliminarProducto={removeItem} icono={faTrashAlt} cantidadTotal={cantidadTotal} total={total} handleVaciarCarrito={clearCart} showCartComponents={true} />
                }
            </div >
        </Container>
    )
}
