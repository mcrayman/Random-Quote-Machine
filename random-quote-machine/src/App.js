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
    <div className='d-flex align-items-center justify-content-center text-center min-vh-100' style={{ backgroundColor: '#5cbdea' }}>
      <Card style={{ width: '60rem', height: 'auto', borderRadius: '15px' }}>
        <Card.Body className='d-flex flex-column mt-auto justify-content-evenly align-items-center'>
          <Card.Title style={{ fontSize: '2rem' }}>Random Quote Generator</Card.Title>
          <div id="quote-box" className='text-center'>
            <p id="text" className='mb-3' style={{ fontSize: '3rem', color: '#5cbdea' }}>"{quoteInfo.text}"</p>
            <p id="author" style={{ fontSize: '2rem' }}> - {quoteInfo.author}</p>
            <div className="row align-items-end justify-content-center">
              <button id="new-quote" onClick={getQuote} className='col-auto btn btn-primary mx-2'>New Quote</button>
              <a href={"https://twitter.com/intent/tweet?hash..." + quoteInfo.text} id="tweet-quote" className='col-auto btn btn-info'>Tweet Quote</a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
