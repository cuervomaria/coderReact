import React, {useState} from 'react'
import UserForm from "../userForm/UserForm";
import Order from "../order/Order";
import "./checkoutContainer.css"

export default function CheckoutContainer() {

    const [showOrderDetail, setShowOrderDetail] = useState(false)
    const [user, setUser] = useState({})

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
