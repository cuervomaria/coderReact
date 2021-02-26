import React, {useState} from 'react'
import UserForm from "../../components/userForm/UserForm";
import Order from "../../components/order/Order";
import "./checkoutContainer.css"

//Muestra el formulario para ingresar los datos del comprador. Una vez que se ingresan los datos al formulario y son validados, recibe del formulario el objeto user con los datos del comprador y un valor (true) de validación de formulario que le indica mostrar el componente Order que muestra un resumen de la compra. Hidrata dicho componente con el objeto user que recibió del formulario.

export default function CheckoutContainer() {

    const [showOrderDetail, setShowOrderDetail] = useState(false)
    const [user, setUser] = useState({})

    //callback function que pasa al formulario para que este le pueda pasar el ok de que el formulario fue validado y el objeto user.
    const handleShowOrderDetail = (formValidation, user) => {
        setShowOrderDetail(formValidation)
        setUser(user)
    }

    return (
        <div className="padre">
        <div className="checkoutWrapper">
            { !showOrderDetail? <UserForm showOrderDetail={handleShowOrderDetail}/> : <Order user={user}/> }
                      
        </div>
        </div>
    )
}
