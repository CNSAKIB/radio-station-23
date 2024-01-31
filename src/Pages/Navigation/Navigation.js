import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Navigation = () => {
    return (
        <div>
            {[false].map((expand) => (
                <Navbar bg="primary" key={expand} expand={expand} data-bs-theme="dark" className="mb-3" >
                    <Container fluid>
                        <Navbar.Brand href="#">Radio Station 23</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Radio Station 23
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/">Browse</Nav.Link>
                                    <Nav.Link href="radiomaps">Radio Map</Nav.Link>
                                    <Nav.Link href="favourites">Favourites</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    );
};

export default Navigation;