import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
export default function Navbarr() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <span className="logo">AmitiMax</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="logo">
              Home
            </Nav.Link>
            <Nav.Link href="#skills" className="logo">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="logo">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div>
          <a href="">
            <AiFillInstagram size={"30px"} />
          </a>
          <a href="">
            <AiFillYoutube size={"30px"} />
          </a>
        </div>
      </Container>
    </Navbar>
  );
}
