
import React, { useState } from 'react'
import "./userForm.css"

//Formulario que recibe la información del comprador y lo guarda como objeto en el estado user

export default function UserForm({ showOrderDetail }) {

    const [user, setUser] = useState({})

    //guarda la información ingresada en los inputs en el estado user a medida que se va ingresando.

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    //Al enviar valida que los mails ingresados coincidan y que todos los campos estén completos. Si se cumplen esas dos condiciones, le pasa al componente checkoutContainer el objeto user y un valor de validación de formulario (true) para que muestre el orderDetail.

    const handleEnviar = (e) => {
        e.preventDefault()
        if (user.email !== user.email2) {
            alert("los emails ingresados no coinciden, por favor corrija y vuelva a intentarlo")
        } else if (!user.name || !user.phone || !user.email) {
            alert("debe completar todos los campos")
        } else {
            showOrderDetail(true, user)
            console.log('user', user)
        }
    }

    return (
        <div className="formularioWrapper">
            <h3> Por favor ingese sus datos:</h3>
            <br />
            <form className="formulario" onSubmit={handleEnviar}>
                <input name="name" onChange={handleInputChange} type="text" placeholder="Nombre" value={user.userName} required />
                <input name="email" onChange={handleInputChange} type="email" placeholder="email" value={user.userEmail} required />
                <input name="email2" onChange={handleInputChange} type="email" placeholder="repita su email" value={user.userEmail2} required />
                <input name="phone" onChange={handleInputChange} type="number" placeholder="número de teléfono" value={user.userPhone} required />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
