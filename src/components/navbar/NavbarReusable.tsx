
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faBookOpen, faChalkboardTeacher, faIgloo } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/fonts.css';
import { Link } from 'react-router-dom';

// import * as logo from "../../assets/images/logo.png"

export default function NavbarReusable() {
  return (
    <>
      <Navbar fixed='top' collapseOnSelect bg='blue' variant='light' expand='sm'>
        <Container>
          <Navbar.Brand href='#' style={{ fontFamily: 'Ranchers', fontSize: '6vw' }}>
            <img
              alt=''
              src='https://gitter499.github.io/guild-of-finance-website/logo.png'
              width='100'
              height='100'
              className='d-inline-block align-top'
            />{' '}
            Guild of Finance
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Item>
                <Nav.Link>
                  <FontAwesomeIcon icon={faIgloo} />
                  <h1 style={{ fontFamily: 'Ranchers' }}>
                    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                      Home
                    </Link>
                  </h1>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <FontAwesomeIcon icon={faChalkboardTeacher} />
                  <h1 style={{ fontFamily: 'Ranchers' }}>
                    <Link to='/about' style={{ textDecoration: 'none', color: 'black' }}>
                      About
                    </Link>
                  </h1>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <FontAwesomeIcon icon={faBookOpen} />
                  <h1 style={{ fontFamily: 'Ranchers' }}>
                    <Link to='/book' style={{ textDecoration: 'none', color: 'black' }}>
                      Book
                    </Link>
                  </h1>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='/author'>
                  <FontAwesomeIcon icon={faAt} />
                  <h1 style={{ fontFamily: 'Ranchers' }}>
                    <Link to='/author' style={{ textDecoration: 'none', color: 'black' }}>
                      Author
                    </Link>
                  </h1>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
