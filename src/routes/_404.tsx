import {Jumbotron } from 'react-bootstrap';

import image from '../assets/images/404image.png'; // importing the royalty free image for the 404 page

export default function _404() {
  return (

    // Main div for the page
    <div>
      <Jumbotron className='d-flex flex-column min-vh-100 justify-content-center align-items-center overflow-auto'>
          {/* Centering the Jumbo */}
        <h1
          style={{
            fontFamily: 'Ranchers',
            textAlign: 'center',
            paddingRight: '80px',
            paddingLeft: '80px',
            paddingTop: '10px',
            fontSize: '30px',
          }}
        //   Styling the main text
        >
          Uh oh! The finance monkey managing this webpage couldn't find the page you were looking for
        </h1>
        {/* Bacl button */}
        <a
          href='/guild-of-finance-website/#'
          style={{ color: 'green', fontFamily: 'Ranchers', textDecoration: 'none', fontSize: '30px', marginTop: '30px' }}
        >
          Back to home
        </a>
        {/* Image with atribution */}
        <img src={image} alt='' style={{ height: '35vh', width: '35vh', padding: '10px', borderRadius: '12px', alignContent: 'center' }} />
        <h6 style={{ padding: '10px' }}>
          <a style={{ color: 'green' }} href='https://undraw.co/illustrations'>
            Image Credit{' '}
          </a>
        </h6>
      </Jumbotron>
    </div>
  );
}
