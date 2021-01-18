import React from "react"
import "./itemListContainer.css"
import ItemCount from "../itemCount/ItemCount"
import ItemList from "../itemList/ItemList"

const ItemListContainer = ({ greetings }) => {
    return (
        <div className="container itemListContainer">
            <h4>{greetings}</h4>
            <br></br>
            <div>
            <ItemList />
            <ItemCount stock={5} initial={1}/>
            </div>
        </div>
    )
}

export default ItemListContainer