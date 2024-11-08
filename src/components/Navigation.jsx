import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav, Offcanvas, Form } from "react-bootstrap";

import logo from "../img/BUGS_HUNTING-removebg-preview.png";

const Navigation = () => {
  const expand = "md";
  return (
    <>
      <Navbar key={expand} expand={expand} className="mb-3 navBar">
        <Container>
          <NavLink to="/" className="Brand brand">
            {/* <img src={logo} alt="wiki-logo" class="logo" /> */}
            <h3>Nassim MZILI</h3>
          </NavLink>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Nassim MZILI
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink to="/static" className="mx-3 navLink">
                  Static
                </NavLink>
                <NavLink to="/reactjs" className="mx-3 navLink">
                  React JS
                </NavLink>
                {/* <NavLink to="/php" className="mx-3 navLink">
                  Php
                </NavLink> */}
              </Nav>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search a project..."
                  className="me-2"
                  aria-label="Search"
                />
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
