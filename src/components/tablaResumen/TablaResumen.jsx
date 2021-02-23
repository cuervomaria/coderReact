import React from 'react'
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


export default function TablaResumen({textLastCol, array, handleEliminarProducto, icono, cantidadTotal, total, handleVaciarCarrito, showCartComponents}) {
    
    

    const resumenCompra = () => {
     
        const productosSeleccionados = array.map((producto, i) => {
            return (
                <React.Fragment>
                    <tr key={producto.id}>
                        <td>{i + 1}</td>
                        <td>{producto.linea}-{producto.varietal}</td>
                        <td>{producto.cantidad}</td>
                        <td>$ {producto.precio}</td>
                        <td>$ {producto.cantidad * producto.precio}</td>
                        { showCartComponents && <td onClick={()=>handleEliminarProducto(producto.id)} className="iconLink"> <FontAwesomeIcon icon={icono} /></td>}
                        
                    </tr>

                </React.Fragment>
            )
        })

       

        const totales = () => {
            return (
                <React.Fragment>
                    <tr>
                        <td></td>
                        <td><b>TOTAL</b></td>
                        <td>{cantidadTotal}</td>
                        <td></td>
                        <td>$ {total} </td>
                        {showCartComponents && <td></td>}
                        
                    </tr>
                   
                    { showCartComponents &&
                    
                    <tr>                        
                        <td colspan="2"> <Button onClick={()=>handleVaciarCarrito()} variant="outline-danger">Vaciar el carrito <FontAwesomeIcon icon={faTrashAlt} /> </Button> </td>
                        <td colspan="4"><Link to="../checkout"> <Button variant="outline-dark">Continuar la compra </Button> </Link> </td>
                    </tr> }
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
                    { showCartComponents &&  <th>{textLastCol}</th> }
                    
                </tr>
            </thead>
            <tbody>
                {resumenCompra()}
                
            </tbody>
        </Table>
            
        </div>
    )
}
