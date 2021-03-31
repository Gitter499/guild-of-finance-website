import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faInbox, faInfo, faInfoCircle, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/fixes.css';
import '../../assets/css/fonts.css';
export default function Footer() {
  return (
    <Container fluid className='fixed-bottom'>
      <Row>
        <Col>
          <Nav>
            <Nav.Link>
              <a href='https://www.instagram.com/rafayel.19/' style={{ color: 'black' }}>
                <FontAwesomeIcon icon={faInfoCircle} />
                <p style = {{fontFamily: "Ranchers"}}>Instagram</p>
              </a>
            </Nav.Link>
            <Nav.Link href='mailto: rafayel.amirkhanyan@gmail.com' style={{ color: 'black' }}>
              <FontAwesomeIcon icon={faMailBulk} />
              <p style = {{fontFamily: "Ranchers"}}>Contact</p>
            </Nav.Link>
            <Nav.Link>
              <Link to='/about' style={{ color: 'black' }}>
                <FontAwesomeIcon icon={faInfo} />
                <p style = {{fontFamily: "Ranchers"}}>About</p>
              </Link>
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}
