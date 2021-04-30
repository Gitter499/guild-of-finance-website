import { useState } from 'react';
import Footer from '../components/Footer';
import NavbarReusable from '../components/NavbarReusable';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/data.css';

import { searchStocks, companyOverview } from '../api/index';
import React from 'react';
import { Card, Col, Container, Form, Jumbotron, Row } from 'react-bootstrap';

export default function Data() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const [display, setDisplay] = useState<any[]>([]);
  const [resultLength, setResultLength] = useState(0);


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await searchStocks(query);

    console.log(res?.bestMatches);

    setDisplay(res?.bestMatches);

    setResultLength(res?.bestMatches.length);
    setLoading(false);
  };

  return (
    <>
      <NavbarReusable />
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          height: '300px',
          fontFamily: 'Playfair Display',
          marginTop: '70px',
        }}
      >
        <input style={{ borderRadius: '5px' }} name='stock' type='string' value={query} onChange={e => setQuery(e.target.value)} />
        <label style={{ marginBottom: '20px' }}>Search Stocks</label>
        {!loading && <h5 style={{ fontSize: '16px' }}># of results: {resultLength}</h5>}
      </form>
      <Jumbotron></Jumbotron>
      {loading
        ? undefined
        : (() => {
            const elements: any[] = [];
            display.forEach((elem, index) => {
              elements.push(
                <>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      height: '100vh',
                      fontFamily: 'Playfair Display',
                    }}
                    key={index}
                  >
                    <Card style={{ width: '55vw', textAlign: 'center', borderRadius: '10px', borderColor: 'black' }}>
                      <h1>{elem['1. symbol']} </h1>
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
      <Footer />
    </>
  );
}
