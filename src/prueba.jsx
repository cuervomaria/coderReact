import React, {useState} from 'react'

export default function Prueba() {
    const [a, setA] = useState({})
    console.log (a!=={})
    console.log (a!=="")
    console.log (Object.keys(a).length!==0)

    return (
        <div>
            PROBANDO
        </div>
    )
}
