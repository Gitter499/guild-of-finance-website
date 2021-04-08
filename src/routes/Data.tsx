import React, { useState } from 'react';
import Footer from '../components/footer/Footer';
import NavbarReusable from '../components/navbar/NavbarReusable';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/data.css'

const apikey = process.env.REACT_APP_AV_API_KEY;

/*
1. symbol": "BAB",
      "2. name": "Invesco Taxable Municipal Bond ETF",
      "3. type": "ETF",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": "0.8000"

*/

export default function Data() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  // const [display, setDisplay] = useState<any>({display: []});

  const [display, setDisplay] = useState<any[]>([]);

  const searchStocks = async (query: String) => {
    const req = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query.toUpperCase()}&apikey=${apikey}`);
    const res = await req.json();

    console.log(res.bestMatches);

    setDisplay(res.bestMatches);
    setLoading(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    searchStocks(query);
  };

  return (
    <>
      <NavbarReusable />
      <form className='search-bar' onSubmit={handleSubmit}>
        <label>Search Stocks</label>
        <input name='stock' type='string' value={query} onChange={e => setQuery(e.target.value)} />
      </form>
      <div className=''>
        <div className='card'>
          {loading
            ? undefined
            : (() => {
                const elements: any[] = [];
                display.forEach((elem, index) => {
                  elements.push(
                    <React.Fragment key={index}>
                      <div>{elem['1. symbol']}</div>
                      <div>{elem['2. name']}</div>
                      <div>{elem['3. type']}</div>
                      <div>{elem['4. region']}</div>
                      <div>{elem['5. marketOpen']}</div>
                      <div>{elem['6. marketClose']}</div>
                      <div>{elem['7. timezone']}</div>
                      <div>{elem['8. currency']}</div>
                    </React.Fragment>,
                  );
                });
                return elements;
              })()}
        </div>
      </div>
      <Footer />
      
    </>
  );
}
