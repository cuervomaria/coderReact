import React from "react";
//import logo from "../../logo.svg";
import { Navbar, Nav, NavDropdown  } from 'react-bootstrap';
import "./navbar.css"

const BarraNavegacion = () => {
    return (
        <Navbar bg="dark" variant="dark" className="NavbarColor d-flex align-items-center" expand="lg">
            <Navbar.Brand href="#home">LOGO - Viña Cobos</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto navbarLinks">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Lineas" id="lineas">
                        <NavDropdown.Item href="#action/3.1">Felino</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Cocodrilo</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Bramare Appelation</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Bramare Vineyard Designate</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">Cobos/Volturno</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Varietal" id="varietal">
                        <NavDropdown.Item href="#action/3.1">Malbec</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Cabernet Sauvignon</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Chardonnay</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Blend</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">Pinot Noir</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.6">Cabernet Franc</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <div className="carritoNavbar">
                    <p className="mx-2 my-auto">Carrito</p>
                    <p className="mx-2 my-auto">Items</p>
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

export  {BarraNavegacion};