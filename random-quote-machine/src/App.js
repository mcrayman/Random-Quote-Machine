import React from 'react'
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

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

  const tweetQuoteUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteInfo.text)} - ${encodeURIComponent(quoteInfo.author)}`;

  return (
    <div className='d-flex row align-items-center justify-content-center text-center vh-100' style={{ backgroundColor: '#5cbdea' }}>
      <Card style={{ width: '60rem', height: 'auto', borderRadius: '15px' }}>
        <Card.Body className='d-flex flex-column justify-content-evenly align-items-center'>
          <Card.Title style={{ fontSize: '2rem' }}>Random Quote Generator</Card.Title>
          <div id="quote-box" className='text-center'>
            <p id="text"  style={{ fontSize: '3rem', color: '#5cbdea' }}>"{quoteInfo.text}"</p>
            <p id="author" style={{ fontSize: '2rem' }}> - {quoteInfo.author}</p>
            <div className="row align-items-end justify-content-center">
              <button id="new-quote" onClick={getQuote} className='col-auto btn btn-primary mx-2'>New Quote</button>
              <a href={tweetQuoteUrl} id="tweet-quote" className='col-auto btn btn-info' target="_blank" rel="noopener noreferrer">
                Tweet Quote
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
      <div id='signature'>Matthew McMeans</div>
    </div>

  );
}

export default App;
