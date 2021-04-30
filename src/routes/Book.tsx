import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import NavbarReusable from '../components/NavbarReusable';
import file from '../components/markdown/gof_final.md';

import ReactMarkdown from 'react-markdown';

export default function Book() {
  // fetches the markdown and converts to text, sets as a global state
  const [article, setArticle] = useState('');
  useEffect(() => {
    fetch(file)
      .then(res => {
        return res.text();
      })
      .then(text => {
        setArticle(text);
      });
  }, []);
  return (
    <>
      <NavbarReusable />
      <hr />
      <div className='d-grid align-items-center'>
        <section>
          <article style={{ padding: '40px 40px', marginBottom: '100px', marginTop: '100px', fontFamily: 'Playfair Display' }}>
            {/* State is rendered into React Markdown, which parses the markdowm. Added responsive styling using inline styles */}
            <ReactMarkdown source={article} />
          </article>
        </section>
        <hr />
      </div>

      <Footer />
    </>
  );
}
