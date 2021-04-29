import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import NavbarReusable from '../components/NavbarReusable';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/fixes.css';
import '../assets/css/fonts.css';

export default function About() {
  return (
    <>
      <NavbarReusable />

      <Jumbotron className='d-flex flex-column min-vh-100 justify-content-center align-items-center overflow-auto'>
        <h2 style={{ marginTop: '220px', fontFamily: 'Playfair Display', color: 'green' }}>A totally accurate picture of me</h2>
        <img
          src='https://gitter499.github.io/guild-of-finance-website/Amirkhanyan_Rafayel_FinalPortrait.jpg'
          alt=''
          style={{ height: '15vw', width: '15vw', paddingTop: '20px', borderRadius: '12px', alignContent: 'center' }}
        />
        <hr />
        <h1 style={{ fontFamily: 'Ranchers', paddingTop: '30px', paddingBottom: '15px', textAlign: 'center' }}>
          What is the "Guild Of Finance?"
        </h1>
        <h2 style={{ fontFamily: 'Playfair Display', paddingTop: '20px', paddingBottom: '15px', textAlign: 'center' }}>
          I am glad you asked!
        </h2>
        <p
          style={{
            fontFamily: 'Playfair Display',
            paddingLeft: '100px',
            paddingRight: '100px',
            marginBottom: '100px',
            textAlign: 'center',
          }}
        >
          As the creator of the website, I wanted to teach many young adults how to manage money. Guild of finance is an entrant to the
          Ctrl+Shift competition, I wanted to make something unique that would seperate this project from the others. Hence I decided to
          come up with guild of finance, which is not what you would usually expect from a competition like this. I was heavily inspired by
          r/wallstreetbets and the mega stonk GameStop.
        </p>
        <hr />
      </Jumbotron>
      <Footer />
    </>
  );
}
