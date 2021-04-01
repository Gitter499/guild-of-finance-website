import React, { useEffect, useState } from 'react';
import Footer from '../components/footer/Footer';
import NavbarReusable from '../components/navbar/NavbarReusable';
import file from '../components/book/markdown/test.md'

import ReactMarkdown from 'react-markdown'

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
      <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
        <section>
          <article >
              <ReactMarkdown source={article} />
          </article>
        </section>
      </div>

      <Footer />
    </>
  );
}
