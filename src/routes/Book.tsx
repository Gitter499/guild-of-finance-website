import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer'
import NavbarReusable from '../components/NavbarReusable';
import file from '../components/markdown/gof_final.md';


import ReactMarkdown from 'react-markdown';

export default function Book() {
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
            <ReactMarkdown source={article} />
          </article>
        </section>
        <hr />
      </div>

      <Footer />
    </>
  );
}
