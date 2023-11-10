import React from 'react'
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [quoteInfo, setQuoteInfo] = useState({})
  useEffect(() => {
    getQuote();
  }, [])
  
  const getQuote = () => {
    fetch("https://api.quotable.io/random")
    .then((response) => {return response.json()})
    .then((data) => {
      setQuoteInfo({
        text: data.content,
        author: data.author
      })
      console.log(data);
    })
  }

  return (
    <div className='d-flex align-items-center justify-content-center text-center min-vh-100'>
    <Card style={{ width: '60rem', height: '40rem' }}>
      <Card.Body className='d-flex flex-column justify-content-between align-items-center'>
        <Card.Title style={{ fontSize: '2rem', marginBottom: '2rem' }}>Random Quote Generator</Card.Title>
        <div id="quote-box" className='text-center'>
          <p id="text" className='mb-3' style={{ fontSize: '3rem', color: '#5cbdea' }}>"{quoteInfo.text}"</p>
          <p id="author" style={{ fontSize: '2rem' }}> - {quoteInfo.author}</p>
          <button id="new-quote" onClick={getQuote} className='btn btn-primary mb-3'>New Quote</button>
          <a href={"https://twitter.com/intent/tweet?hash..." + quoteInfo.text} id="tweet-quote" className='btn btn-info'>Post to Twitter</a>
        </div>
      </Card.Body>
    </Card>
  </div>
  

  );
}

export default App;
