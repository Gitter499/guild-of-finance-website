import { useState, useEffect } from 'react';
// reusable components
import Footer from '../components/Footer';
import NavbarReusable from '../components/NavbarReusable';

// importing image

import image from '../assets/images/dataPageImage.png';

// bootstrap and other minor css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/data.css';

import { searchStocks } from '../api/index';
import { Card, Jumbotron } from 'react-bootstrap';

export default function Data() {
  // states for getting query from user and loading logic
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  // Info and result states
  const [display, setDisplay] = useState<any[]>([]);
  const [resultLength, setResultLength] = useState(0);

  const [extraInfo, setExtraInfo] = useState([]);
  // Called when form is submitted, async function
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // gets info and sets all states
    const res = await searchStocks(query);

    // console.log(res?.bestMatches); was used for debugging purposes, leaving here to remember the pain

    setDisplay(res.bestMatches);

    setResultLength(res?.bestMatches.length);
    setLoading(false);
  };

  // Recommended Card styles

  const recStyles = {
    margin: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '55vw',
  };

  return (
    <>
      {/* Navbar */}
      <NavbarReusable />
      <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center overflow-auto'>
        {/* Header */}
        <h1 style={{ fontFamily: 'Ranchers', paddingTop: '150px', textAlign: 'center' }}> Search Stock Data</h1>
        {/* Search image */}
        <img src={image} alt='' style={{ height: '50vh', width: '45vh', paddingTop: '30px', borderRadius: '12px' }} />
        {/* Credit for the image */}
        <h6 style={{ padding: '10px' }}>
          <a style={{ color: 'green' }} href='https://undraw.co/illustrations'>
            Image Credit{' '}
          </a>
        </h6>

        {/* Main search form */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100px',
            fontFamily: 'Playfair Display',
            marginTop: '10px',
            marginBottom: '60px',
          }}
        >
          {/* Sets the query state using the form value */}
          <label style={{ marginBottom: '20px' }}>Search Stocks</label>
          <input
            style={{ borderRadius: '5px', marginBottom: '20px' }}
            name='stock'
            type='string'
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {!loading && <h5 style={{ fontSize: '16px' }}># of results: {resultLength}</h5>}
        </form>

        {/* Recommended */}

        <div style={{ fontFamily: 'Playfair Display', textAlign: 'center' }}>
          {!loading &&
            (display.length >= 4 ? (
              <div>
                <h1>Recommended Stocks</h1>
                <Card
                  style={{
                    margin: '30px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    width: '55vw',
                  }}
                >
                  <h2>{display[Math.floor(Math.random() * display.length)]['2. name']}</h2>
                </Card>
                <Card
                  style={{
                    margin: '30px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    width: '55vw',
                  }}
                >
                  <h2>{display[Math.floor(Math.random() * display.length)]['2. name']}</h2>
                </Card>
                <Card
                  style={{
                    margin: '30px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    width: '55vw',
                  }}
                >
                  <h2>{display[Math.floor(Math.random() * display.length)]['2. name']}</h2>
                </Card>
              </div>
            ) : display.length >= 2 ? (
              <Card
                style={{
                  margin: '30px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  width: '55vw',
                }}
              >
                <h2>{display[Math.floor(Math.random() * 2)]['2. name']}</h2>
              </Card>
            ) : display.length >= 2 ? (
              <Card
                style={{
                  margin: '30px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  width: '55vw',
                }}
              >
                <h2>{display[Math.floor(Math.random() * 2)]['2. name']}</h2>
              </Card>
            ) : (
              <Card
                style={{
                  margin: '30px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  width: '55vw',
                }}
              >
                <h2>{display[0]['2. name']}</h2>
              </Card>
            ))}
        </div>

        {/* <Jumbotron></Jumbotron> */}

        {/* Dynamcally load all the resulrs and display the data */}
        {loading
          ? undefined
          : (() => {
              const elements: any[] = [];
              display.forEach((elem, index) => {
                elements.push(
                  <>
                    {/* Main div */}

                    <div
                      style={
                        {
                          // display: 'flex',
                          // flexDirection: 'column',
                          // justifyContent: 'center',
                          // alignItems: 'center',
                          // textAlign: 'center',
                          // height: '100vh',
                          // fontFamily: 'Playfair Display',
                        }
                      }
                      key={index}
                    >
                      {/* Shows each stock as a card */}
                      <hr />
                      <Card style={{ width: '55vw', textAlign: 'center', borderRadius: '10px', borderColor: 'black', margin: '10px' }}>
                        {/* All useful data is displayed for each match */}
                        <h1>{elem['1. symbol']} </h1>
                        {/* Divider stuff to make it look pretty (entropy code) */}
                        <hr />
                        <h2>{elem['2. name']}</h2>
                        <hr />
                        <div>
                          <h3>Extra info:</h3>
                          <div>
                            <strong>Type: </strong> {elem['3. type']}
                          </div>
                          <hr />
                          <div>
                            <strong>Region: </strong>
                            {elem['4. region']}
                          </div>
                          <hr />
                          <div>
                            <strong>Market opens: </strong>
                            {elem['5. marketOpen']}
                          </div>
                          <hr />
                          <div>
                            <strong>Market closes: </strong>
                            {elem['6. marketClose']}
                          </div>
                          <hr />
                          <div>
                            <strong>Timezone: </strong>
                            {elem['7. timezone']}
                          </div>
                          <hr />
                          <div>
                            <strong>Currency: </strong>
                            {elem['8. currency']}
                          </div>
                          <hr />
                          <div>
                            <strong>High: </strong>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </>,
                );
              });
              return elements;
            })()}
      </div>
      <Footer />
    </>
  );
}
