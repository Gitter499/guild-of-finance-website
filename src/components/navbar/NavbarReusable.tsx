import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faBookOpen, faChalkboardTeacher, faIgloo } from '@fortawesome/free-solid-svg-icons'
import '../../assets/css/fonts.css'

// import * as logo from "../../assets/images/logo.png"

export default function NavbarReusable() {


  return (
    <>
    <Navbar fixed = "top" collapseOnSelect bg="blue" variant="light" expand="sm">
      <Container>
      <Navbar.Brand href="#" style= {{fontFamily: "Ranchers"}}>
        <img
          alt=""
          src="public/logo512.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Guild of Finance
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto" defaultActiveKey="#">
        <Nav.Link className="" href="#">
          <FontAwesomeIcon icon={faIgloo}/>
            <h1 style= {{fontFamily: "Ranchers"}}>
              Home
            </h1>
          </Nav.Link>
        <Nav.Link href="#about" eventKey = "about">
        <FontAwesomeIcon icon={faChalkboardTeacher}/>
            <h1 style= {{fontFamily: "Ranchers"}}>
              About
            </h1>
          </Nav.Link>
        <Nav.Link href="#book" eventKey = "book">
        <FontAwesomeIcon icon={faBookOpen}/>
            <h1 style= {{fontFamily: "Ranchers"}}>
              Book
            </h1>
          </Nav.Link>
        <Nav.Link href="#author" eventKey="author"> 
        <FontAwesomeIcon icon={faAt}/>
            <h1 style= {{fontFamily: "Ranchers"}}>
              Author
            </h1>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  </>
    )
}





