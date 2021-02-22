import React, {useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";
import logo from "../../assets/img/logo/logo.png";
import "./navbar.css"
import { getFirestore } from "../../firebase/index"






const BarraNavegacion2 = () => {

    const [categorias, setCategorias] = useState([])


    useEffect(() => {
        const db = getFirestore();
        const categoriesDb = db.collection("Category")
        categoriesDb.get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log("No hay categorias")
                }
                console.log("categorias", querySnapshot)
                console.log("categorias-doc", querySnapshot.docs)
                let arrayCategories = querySnapshot.docs.map((doc) => {
                    return ({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                console.log("arrayCategories", arrayCategories)
                setCategorias(arrayCategories)
            })

    }, [])


    return (
        <Navbar bg="dark" variant="dark" className="d-flex align-items-center navColor" expand="lg">
            <Link to="/"> <Navbar.Brand> <img src={logo} alt="Logo Vina Cobos" /> </Navbar.Brand> </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    {/* <Nav.Link href="/">Home</Nav.Link> */}
                    <NavDropdown title="Lineas" id="lineas">
                        {categorias.map(cat=>
                        <Link className="dropdown-item" key={cat.id} to={`/category/${cat.name}`}>{cat.name}</Link>)}
                        
                        
                        {/* <Link className="dropdown-item" to="/category/Felino">Felino</Link>
                        <Link className="dropdown-item" to="/category/Cocodrilo">Cocodrilo</Link>
                        <Link className="dropdown-item" to="/category/Bramare Appelation">Bramare Appelation</Link>
                        <Link className="dropdown-item" to="/category/Bramare Vineyard Designate">Bramare Vineyard Designate</Link>
                        <Link className="dropdown-item" to="/category/Volturno">Volturno</Link>
                        <Link className="dropdown-item" to="/category/Cobos">Cobos</Link> */}
                    </NavDropdown>
                    {/* <NavDropdown title="Varietal" id="varietal">
                        <NavDropdown.Item href="#action/3.1">Malbec</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Cabernet Sauvignon</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Chardonnay</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Blend</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">Pinot Noir</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.6">Cabernet Franc</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <div className="carritoNavbar">
                    <CartWidget />
                </div>

            </Navbar.Collapse>
        </Navbar>
        // <div>
        //     <nav>
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <button>Link 1</button>
        //     </nav>
        // </div>

    );


}

export { BarraNavegacion2 };