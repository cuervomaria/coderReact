import React from "react"
import "./itemListContainer.css"

const ItemListContainer = ({ greetings }) => {
    return (
        <div className="container itemListContainer">
            <h1>{greetings}</h1>
        </div>
    )
}

export default ItemListContainer