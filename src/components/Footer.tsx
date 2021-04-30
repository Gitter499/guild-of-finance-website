import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faInbox, faInfo, faInfoCircle, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/fixes.css';
import '../assets/css/fonts.css';
export default function Footer() {
  // Footer, reusable component used on all pages
  return (
    <Container fluid className='fixed-bottom bg-white'>
      <Row>
        <Col>
          <Nav>
            {/* Links */}
            <Nav.Item>
              <Nav.Link href='https://www.instagram.com/rafayel.19/' style={{ color: 'black' }}>
                {/* Icom */}
                <FontAwesomeIcon icon={faInfoCircle} />
                <p style={{ fontFamily: 'Ranchers' }}>Instagram</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='mailto: rafayel.amirkhanyan@gmail.com' style={{ color: 'black' }}>
                <FontAwesomeIcon icon={faMailBulk} />
                <p style={{ fontFamily: 'Ranchers' }}>Contact</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/#/about' style={{ color: 'black' }}>
                <FontAwesomeIcon icon={faInfo} />
                <p style={{ fontFamily: 'Ranchers' }}>About</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}
