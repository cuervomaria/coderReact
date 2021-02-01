import React, { useState } from 'react'

export const CartContext = React.createContext(0)

export const CartContextProvider = ({ children }) => {

     const [cart, setCart] = useState(0)


    // const addItem = ({ producto }, cantidad) => {
    //     let index = cart.findIndex(item => item.id === producto.id)
    //     if (index !== -1) {
    //         alert("El producto ya se encuentra agregado al carrito")
    //     } else {
    //         setCart([...cart, {
    //             "id": producto.id,
    //             "linea": producto.linea,
    //             "varietal": producto.varietal,
    //             "precio": producto.precio,
    //             "cantidad": cantidad,

    //         }])
    //     }
    // }



    // const removeItem = (id) => {
    //     let index = cart.findIndex(item => item.id === id)
    //     if (index !== -1) {
    //         setCart(cart.splice(index, 1))
    //     }

    // }

    // const clear = () => {
    //     setCart([])
    // }

    // const isInCart = (id) => {
    //     let index = cart.findIndex(item => item.id === id)
    //     let existe
    //     if (index !== -1) {
    //         existe = true
    //     } else {
    //         existe = false
    //     }
    //     console.log(existe)
    //     return existe
    // }



    return (
        <CartContext.Provider value={[cart,setCart]}>
            {children}
        </CartContext.Provider>
    )
}
