import React from 'react';
import { Button, Jumbotron, ListGroup } from 'react-bootstrap';
import Footer from '../components/Footer';
import NavbarReusable from '../components/NavbarReusable';
import 'bootstrap/dist/css/bootstrap.min.css';

import image from '../assets/images/homepage-image.jpg';
import image_2 from '../assets/images/homepage-image_2.jpg';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();

  const handleClick = (type: String) => {
    if (type === 'book') {
      history.push('/book');
    } else if (type === 'about') {
      history.push('/about');
    }
  };

  return (
    <div>
      {/* Navbar */}
      <NavbarReusable />
      {/* Footer */}
      <Footer />

      {/* Jumbo, sets font for all child elements and centers in the page */}
      <Jumbotron
        style={{ fontFamily: 'Playfair Display' }}
        className='d-flex flex-column min-vh-100 justify-content-center align-items-center'
      >
        {/* Styled intro */}
        <h1 style={{ color: 'green', fontFamily: 'Ranchers', paddingTop: '30vh', textAlign: 'center' }}>
          {' '}
          {'print: String >'} Hello world, hello friends
        </h1>
        {/* First image, resizes based on view width, responsibe */}
        <img src={image} alt='' style={{ height: '60vw', width: '60vw', paddingTop: '80px', borderRadius: '12px' }} />
        {/* Credit for the image */}
        <h6 style={{ padding: '10px' }}>
          <a
            style={{ color: 'green' }}
            href='https://unsplash.com/photos/VrJnsLH2nOY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'
          >
            Image Credit{' '}
          </a>
        </h6>
        {/* Welcoming and other info */}
        <h1 style={{ paddingTop: '80px', paddingBottom: '15px' }}>WELCOME</h1>
        <p
          style={{
            padding: '80px',
            paddingBottom: '10px',
            paddingTop: '5px',
            textAlign: 'center',
            paddingLeft: 'calc(20vh - 50px)',
            paddingRight: 'calc(20vh - 50px)',
          }}
        >
          The goto website for young teens who are going into adult hood and are insecure about their finances. This website is a little
          passion project to teach (or at least teach what I know) basic finance to young adults so they don't end up making mistakes they
          will regret later.
        </p>
        <p>
          <Button onClick={() => handleClick('about')} variant='secondary'>
            Learn more
          </Button>
          <hr />
        </p>
        {/* The list group/table, all proportioning done with inline style margin and padding */}
        <h2>What You Will Learn</h2>
        <hr />
        <ListGroup>
          <ListGroup.Item>How Banks Work?</ListGroup.Item>
          <ListGroup.Item>How Credit Cards Work?</ListGroup.Item>
          <ListGroup.Item>How Debit And Checking Accounts Work?</ListGroup.Item>
          <ListGroup.Item>What Is Money?</ListGroup.Item>
          <ListGroup.Item>What Are Assets And Networth?</ListGroup.Item>
          <ListGroup.Item>How The Stock Market Works?</ListGroup.Item>
        </ListGroup>
        <hr />
        {/* Button with divider to split our info */}
        <Button style={{ marginTop: '20px', marginBottom: '20px' }} onClick={() => handleClick('book')} variant='secondary'>
          Read the book!
        </Button>
        <hr />
        {/* Second image */}
        <img src={image_2} alt='' style={{ height: '60vw', width: '60vw', paddingTop: '40px', borderRadius: '12px' }} />
        {/* Image attribution */}
        <h6 style={{ padding: '10px' }}>
          <a
            style={{ color: 'green' }}
            href='https://unsplash.com/photos/bhBONc07WsI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'
          >
            Image Credit{' '}
          </a>
        </h6>
        {/* Last piece of info on the home page */}
        <h2 style={{ marginBottom: '20px', marginTop: '70px' }}>Why read the book?</h2>
        <p
          style={{
            padding: '80px',
            marginBottom: '120px',
            paddingTop: '5px',
            paddingLeft: 'calc(20vh - 50px)',
            paddingRight: 'calc(20vh - 50px)',
            textAlign: 'center',
          }}
        >
          Besides the content listed at the top, the book is written to inspire and to make boring things such as finance be a little more
          interesting. As something that all adults have to deal with eventually it is better to have a good understanding at a young age.
          Whilst the paragraphs and paragraphs in the book might be so interesting, I tried to impelment a bit of comedy and reader
          attention technqiues while writing, so hopefully it hooks you into reading. Have fun! - Rafayel
        </p>
      </Jumbotron>
    </div>
  );
}
