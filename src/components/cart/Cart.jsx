import React, { useContext, useEffect, useState } from 'react'
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { CartContext } from "../../context/CartContext"
import TablaResumen from "../tablaResumen/TablaResumen";
import UserForm from "../userForm/UserForm";
import "./cart.css";

export default function Cart() {

    const { cart, removeItem, total, cantidadTotal, clearCart } = useContext(CartContext)

    



    // const [showForm, setShowForm] = useState(false)
    console.log("cart", cart)




    // const resumenCompra = () => {



    //     const productosSeleccionados = cart.map((producto, i) => {
    //         return (
    //             <React.Fragment>
    //                 <tr key={producto.id}>
    //                     <td>{i + 1}</td>
    //                     <td>{producto.linea}-{producto.varietal}</td>
    //                     <td>{producto.cantidad}</td>
    //                     <td>$ {producto.precio}</td>
    //                     <td>$ {producto.cantidad * producto.precio}</td>
    //                     <td onClick={() => removeItem(producto.id)} className="iconLink"> <FontAwesomeIcon icon={faTrashAlt} /></td>
    //                 </tr>

    //             </React.Fragment>
    //         )
    //     })



    //     const totales = () => {
    //         return (
    //             <React.Fragment>
    //                 <tr>
    //                     <td></td>
    //                     <td><b>TOTAL</b></td>
    //                     <td>{cantidadTotal}</td>
    //                     <td></td>
    //                     <td>$ {total} </td>
    //                     <td></td>
    //                 </tr>
    //                 <tr>
    //                     {/* <td colspan="6"><Button variant="outline-dark" onClick={handleShowForm}>Continuar la compra </Button> </td> */}
    //                     <td colspan="2"> <Button onClick={()=>{clearCart()}} variant="outline-danger">Vaciar el carrito <FontAwesomeIcon icon={faTrashAlt} /> </Button> </td>
    //                     <td colspan="4"><Link to="../checkout"> <Button variant="outline-dark">Continuar la compra </Button> </Link> </td>
    //                 </tr>
    //             </React.Fragment>
    //         )
    //     }

    //     return (
    //         [...productosSeleccionados, totales()]
    //     )
    // }

    const carritoVacio = () => {
        return (
            <>
                <tr>
                    <td colspan="6">Ud no ha agregado ningún producto aún a su carrito </td>
                </tr>
                <tr>
                    <td colspan="6"><Link to="../"><Button variant="outline-dark">Volver al Home </Button></Link> </td>
                </tr>

            </>
        )
    }

    // const buttons = ()=>{
    //     return(
    //     <tr>
            
    //     <td colspan="2"> <Button variant="outline-danger">Vaciar el carrito <FontAwesomeIcon icon={faTrashAlt} /> </Button> </td>
    //     <td colspan="4"><Link to="../checkout"> <Button variant="outline-dark">Continuar la compra </Button> </Link> </td>
    // </tr>)
    // }

    return (


        <div>
            <h3>Ud está por comprar los siguientes productos: </h3>

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

            
             <TablaResumen textLastCol="Eliminar producto" array={cart} handleEliminarProducto={removeItem} icono={faTrashAlt} cantidadTotal={cantidadTotal} total={total} handleVaciarCarrito={clearCart} showCartComponents={true}/>
         
        


            }
        </div >
        /* <Table striped bordered>
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
                {cart.length === 0 ? carritoVacio() : resumenCompra()}
                
            </tbody>
        </Table> */


    )
}
