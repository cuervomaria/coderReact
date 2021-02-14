
import React, {useState} from 'react'
//import Order from "../order/Order"
import "./userForm.css"

export default function UserForm({showOrderDetail}) {

    const [user, setUser] = useState({})
    

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleEnviar = (e) =>{
        e.preventDefault()
        // const email1= document.getElementById("userEmail").value
        // const email2= document.getElementById("userEmail2").value
        // const userName = document.getElementById("userName").value
        // const userPhone = document.getElementById("userPhone").value
        // console.log("userName", userName)
        // console.log("userPhone", userPhone)
        // console.log("email1", email1)
        // console.log("email2", email2)
        if (user.email !== user.email2) {
            alert("los emails ingresados no coinciden, por favor corrija y vuelva a intentarlo")
        } else if(!user.name || !user.phone || !user.email){
            alert("debe completar todos los campos")
        } else {
            showOrderDetail (true, user)
            
            console.log('user', user)
        }

    }

    return (
        <div className="formularioWrapper">
            <h3> Por favor ingese sus datos:</h3>
            <br/>
            <form className="formulario" onSubmit={handleEnviar}>
                <input name="name" onChange={handleInputChange} type="text" placeholder="Nombre" value={user.userName} required/>
                <input name="email" onChange={handleInputChange} type="email" placeholder="email" value={user.userEmail} required/>
                <input name="email2" onChange={handleInputChange} type="email" placeholder="repita su email" value={user.userEmail2} required/>
                <input name="phone" onChange={handleInputChange} type="number" placeholder="número de teléfono" value={user.userPhone} required/>
                <button type="submit">Enviar</button>
                {/* <button onClick={showOrderDetail (formValidation, user) }  >Enviar</button> */}
                {/* <button  onClick ={handleEnviar} >Enviar</button> */}
            </form>
            
            {/* {formValidation && <Order user={user}/>} */}
            
        </div>
    )
}
