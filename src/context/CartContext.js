import React, { useState, useEffect } from 'react'

//Context que tiene toda la información del carrito. Productos agregados al carrito. Total. Cantidad total de ítems.
//También tiene los métodos para manipularlo (agregar un ítem al carrito, eliminar un ítem, vaciar el carrito)

export const CartContext = React.createContext([])

export const CartContextProvider = ({ children }) => {



    /*LEE LA INFORMACIÓN DEL CARRITO EN EL LOCAL STORAGE, y si existe información la setea en el cart*/

    const carritoInicial = localStorage.cartItems !== undefined && localStorage.length > 0 ?
        JSON.parse(localStorage.cartItems)
        :
        []

    const [cart, setCart] = useState(carritoInicial)

    //cada vez que hay un cambio en el carrito lo guarda actualiza en el local storage
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cart))
    }, [cart])


    //Método que agrega ítems al carrito. Es invocado en el botón de agregar al carrito del itemDetail. Se fija si el ID del producto que estoy queriendo agregar ya está en el carrito, entonces muestra una advertencia. Si no hay productos agregados al carrito con ese ID, lo agrega.
    const addItem = (producto, cantidad) => {
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

    //calcula el valor total del carrito
    const total = cart.reduce((acc, curr) => {
        return (acc += curr.cantidad * curr.precio
        )
    }, 0)

    //calcula la cantidad total de productos agregados al carrito. 
    const cantidadTotal = cart.reduce((acc, curr) => {
        return (acc += curr.cantidad
        )
    }, 0)

    //Elimina el producto seleccionado del carrito. Es invocado en el cart. Setea el cart con el array resultante de filtrar en el carrito actual todos aquellos items cuyo ID no coincide con el ID pasado por props.

    const removeItem = (id) => {
        setCart((carro) => carro.filter(item => item.id !== id))
    }

    //vacía el carrito
    const clearCart = () => {
        setCart([])
    }

    useEffect(() => {
        console.log("cart", cart)
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, cantidadTotal }}>
            {children}
        </CartContext.Provider>
    )

}
