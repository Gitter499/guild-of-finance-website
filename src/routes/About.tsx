import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import Footer from '../components/footer/Footer';
import NavbarReusable from '../components/navbar/NavbarReusable';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/fixes.css';
import '../assets/css/fonts.css';

export default function About() {
  return (
    <>
      <NavbarReusable />

      <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
        <h1 style={{ fontFamily: 'Ranchers' }}>What is the "Guild Of Finance?"</h1>
        <h2 style={{ fontFamily: 'Playfair Display' }}>I am glad you asked!</h2>
        <p style={{ fontFamily: 'Playfair Display', wordWrap: 'normal' }}>
          As the creator of the website, 
          I hate CSS with passion and it should rot in hell where it belongs
    
        </p>
      </div>

      <Footer />
    </>
  );
}
