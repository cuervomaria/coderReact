import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./cartWidget.css"

const Carrito = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} />

            <span>QItems</span>
        </div>
    )
}

export default Carrito