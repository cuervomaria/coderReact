import React from 'react'
import {Spinner} from "react-bootstrap"
import "./loading.css"

export default function Loading({padTop}) {
    return (
        <div style={{paddingTop: padTop ? "35vh" : "1vh"   }}>
            <Spinner animation="border" variant="secondary" />
        </div>
    )
}
