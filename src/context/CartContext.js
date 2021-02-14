import React, { useState, useEffect } from 'react'

export const CartContext = React.createContext([])

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    //const [quantity, setQuantity] = useState(0) 

    const addItem = (producto, cantidad) => {
        // console.log(`este es el producto ${producto} y esta la cantidad ${cantidad}`)
        let index = cart.findIndex(item => item.id === producto.id)
        if (index !== -1) {
            alert("El producto ya se encuentra agregado al carrito")
        } else {
            setCart([...cart, {
                "id": producto.id,
                "linea": producto.linea,
                "varietal": producto.varietal,
                "precio": producto.precio,
                "cantidad": cantidad

            }])
        }
    }

    const total = cart.reduce((acc, curr) => {
        return (acc += curr.cantidad * curr.precio
        )
    }, 0)

    const cantidadTotal = cart.reduce((acc, curr) => {
        return (acc += curr.cantidad
        )
    }, 0)

 


    const removeItem = (id) => {
        
        //let index = cart.findIndex(item => item.id === id)
        //let carrito = cart  //hice esta variable intermedia, porque como el splice devuelve un array con el producto eliminado y modifica el array original, no sé si al ser un state lo estaba modificando o no 
        //  console.log("index", index)
        
            //const eliminado = cart.splice(index, 1)
            //console.log("producto eliminado", eliminado)
            //console.log("producto quedan", carrito)
            setCart((carro)=>carro.filter(item => item.id !== id))
        
    }

    const clearCart = () => {
        setCart([])
    }

    // const removeItem = (id) => {
    //     const newCart = cart.filter(item => item.id !== id);
    //     setCart(newCart);
    //   };

   useEffect(() => {
       console.log("cart", cart)
       
   }, [cart])

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, cantidadTotal }}>
            {children}
        </CartContext.Provider>
    )


    

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

}
