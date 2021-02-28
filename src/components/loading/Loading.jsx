import React from 'react'
import {Spinner} from "react-bootstrap"


//Muestra el spinner con 2 opciones de padding dependiendo de la prop que reciba del padre que lo está renderizando.

export default function Loading({padTop}) {
    return (
        <div style={{paddingTop: padTop ? "35vh" : "1vh"   }}>
            <Spinner animation="border" variant="secondary" />
        </div>
    )
}
