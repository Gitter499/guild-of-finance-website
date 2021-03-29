import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faBookOpen, faChalkboardTeacher, faIgloo } from '@fortawesome/free-solid-svg-icons'
import '../../assets/css/fonts.css'
import {Link} from "react-router-dom"

// import * as logo from "../../assets/images/logo.png"

export default function NavbarReusable() {


  
let def: String = "guild-of-finance-website"

  return (
    <>
    <Navbar fixed = "top" collapseOnSelect bg="blue" variant="light" expand="sm">
      <Container>
      <Navbar.Brand href={`${def}/`} style= {{fontFamily: "Ranchers", fontSize: "6vw"}}>
        <img
          alt=""
          src="https://gitter499.github.io/guild-of-finance-website/logo.png"
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{' '}
        Guild of Finance
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Item>
        <Nav.Link>
          <FontAwesomeIcon icon={faIgloo}/>
            <a style= {{fontFamily: "Ranchers"}} href={`${def}/`}>
              Home
            </a>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="#about">
        <FontAwesomeIcon icon={faChalkboardTeacher}/>
            <a style= {{fontFamily: "Ranchers"}} href={`${def}/about`}>
              About
            </a>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="#book">
        <FontAwesomeIcon icon={faBookOpen}/>
            <a style= {{fontFamily: "Ranchers"  }} href={`${def}/book`}>
              Book
            </a>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item >
        <Nav.Link> 
        <FontAwesomeIcon icon={faAt}/>
            <a style= {{fontFamily: "Ranchers"}} href={`${def}/author`}>
              Author
            </a>
        </Nav.Link>
      </Nav.Item>
      </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  </>
    )
}





