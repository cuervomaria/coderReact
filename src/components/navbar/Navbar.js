import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";
import logo from "../../assets/img/logo/logo.png";
import "./navbar.css"
import { getFirestore } from "../../firebase/index"


const BarraNavegacion = () => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const db = getFirestore();
        const categoriesDb = db.collection("Category").orderBy("order")
        categoriesDb.get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log("No hay categorias")
                }
                let arrayCategories = querySnapshot.docs.map((doc) => {
                    return ({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                setCategorias(arrayCategories)
            })
    }, [])


    return (
        <Navbar bg="dark" variant="dark" className="d-flex align-items-center navColor" expand="lg">
            <Link to="/"> <Navbar.Brand> <img src={logo} alt="Logo Vina Cobos" /> </Navbar.Brand> </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="d-flex justify-content-end" id="basic-navbar-nav">
                <Nav className="flex-grow-1">
                    <NavDropdown title="Lineas" id="lineas" className="mx-auto" >
                        {categorias.map(cat =>
                            <NavDropdown.Item as={Link} key={cat.id} to={`/category/${cat.name}`}>{cat.name}</NavDropdown.Item>
                        )}
                    </NavDropdown>
                    <Nav.Link lg={2} as={Link} to="../orderCheck" className="justify-content-end pr-4">Consultar Orden</Nav.Link>
                </Nav>
                <div className="carritoNavbar">
                    <CartWidget />
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export { BarraNavegacion };