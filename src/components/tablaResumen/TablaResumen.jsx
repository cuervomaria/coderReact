import React from 'react'
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

// Se arma una tabla que muestra el resumen de la compra que se está por efectuar (en cart) o el resumen de una orden de compra ya efectuada en (orderCheckContainer)

//Existen funciones (como eliminar un item, vaciar carrito, etc) que sólo tienen sentido que se muestren si está en el cart, no así cuando se consulta una orden de compra ya efectuada, por lo que tiene un renderizado condicional si desde el componente que lo está renderizando le pasa por props que los renderice (showCartComponents=true)

export default function TablaResumen({ textLastCol, array, handleEliminarProducto, icono, cantidadTotal, total, handleVaciarCarrito, showCartComponents }) {


    const resumenCompra = () => {

        //Hace un mapeo por todos los productos del array que se le pase (carrito en caso de cart, y orden en caso de OrderCheck) y construye una tabla con el detalle de los productos

        const productosSeleccionados = array.map((producto, i) => (
                    <tr key={`${producto.id}-${i}`}>
                        <td>{i + 1}</td>
                        <td>{producto.linea}-{producto.varietal}</td>
                        <td>{producto.cantidad}</td>
                        <td>$ {new Intl.NumberFormat("de-DE").format(producto.precio)}</td>
                        <td>$ {new Intl.NumberFormat("de-DE").format(producto.precio * producto.cantidad)}</td>
                        {showCartComponents && <td onClick={() => handleEliminarProducto(producto.id)} className="iconLink"> <FontAwesomeIcon icon={icono} /></td>}
                    </tr>
            ))


        //Se agrega la línea de totales y de los botones para vaciar el carrito o continuar la compra para el caso del cart. 

        const totales = () => {
            return (
                <React.Fragment key="totales">
                    <tr>
                        <td></td>
                        <td><b>TOTAL</b></td>
                        <td>{cantidadTotal}</td>
                        <td></td>
                        <td>$ {new Intl.NumberFormat("de-DE").format(total)} </td>
                        {showCartComponents && <td></td>}
                    </tr>

                    { showCartComponents &&
                        <tr>
                            <td colSpan="2"> <Button onClick={() => handleVaciarCarrito()} variant="outline-danger">Vaciar el carrito <FontAwesomeIcon icon={faTrashAlt} /> </Button> </td>
                            <td colSpan="4"><Link to="../checkout"> <Button variant="outline-dark">Continuar la compra </Button> </Link> </td>
                        </tr>}
                </React.Fragment>
            )
        }

        return (
            [...productosSeleccionados, totales()]
        )
    }

    return (
        <div>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Total</th>
                        {showCartComponents && <th>{textLastCol}</th>}

                    </tr>
                </thead>
                <tbody>
                    {resumenCompra()}
                </tbody>
            </Table>

        </div>
    )
}
