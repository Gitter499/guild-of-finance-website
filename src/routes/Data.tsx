import { useState } from 'react';
import Footer from '../components/Footer';
import NavbarReusable from '../components/NavbarReusable';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/data.css';

import { searchStocks, companyOverview } from '../api/index';
import React from 'react';
import { Card } from 'react-bootstrap';

export default function Data() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const [display, setDisplay] = useState<any[]>([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await searchStocks(query);

    console.log(res?.bestMatches);

    setDisplay(res?.bestMatches);
    setLoading(false);
  };

  return (
    <>
      <NavbarReusable />
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          minHeight: '55vh',
          marginTop: '20px',
          marginBottom: '3px',
        }}
        onSubmit={handleSubmit}
      >
        <label>Search Stocks</label>
        <input name='stock' type='string' value={query} onChange={e => setQuery(e.target.value)} />
      </form>

      {loading
        ? undefined
        : (() => {
            const elements: any[] = [];
            display.forEach((elem, index) => {
              elements.push(
                <>
                  <div style={{ margin: '20px' }} />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      minHeight: '100vh',
                    }}
                    key={index}
                  >
                    <Card style={{ width: '50vw', textAlign: 'center' }}>
                      <h1>{elem['1. symbol']} </h1>

                      <hr />

                      <h2>{elem['2. name']}</h2>

                      <hr />
                      <div>
                        <h3>Extra info:</h3>

                        <div>{elem['3. type']}</div>

                        <hr />

                        <div>{elem['4. region']}</div>

                        <hr />

                        <div>{elem['5. marketOpen']}</div>

                        <hr />

                        <div>{elem['6. marketClose']}</div>

                        <hr />

                        <div>{elem['7. timezone']}</div>

                        <hr />

                        <div>{elem['8. currency']}</div>
                      </div>
                      <hr />
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
