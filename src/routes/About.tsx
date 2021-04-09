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


        <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center overflow-auto'>
          <h1 style={{ fontFamily: 'Ranchers', paddingTop: '150px', paddingBottom: '15px'}}>What is the "Guild Of Finance?"</h1>
          <h2 style={{ fontFamily: 'Playfair Display', paddingTop: '20px', paddingBottom: '15px'}}>I am glad you asked!</h2>
          <p
            style={{
              fontFamily: 'Playfair Display',
              paddingLeft: '130px',
              paddingRight: '130px',
              textAlign: 'center',
            }}
            className='overflow-auto text-start text-wrap'
          >
            As the creator of the website, I wanted to teach many young adults how to manage money. Guild of finance is an entrant to the
            Ctrl+Shift competition, I wanted to make something unique that would seperate this project from the others. Hence I decided to come up
            with guild of finance, which is not what you would usually expect from a competition like this. I was heavily inspired by r/wallstreetbets and the mega stonk
            GameStop.
          </p>
        </div>


      <Footer />
    </>
  );
}
