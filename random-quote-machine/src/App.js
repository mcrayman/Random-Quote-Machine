import React from 'react'
import { useEffect, useState } from 'react';
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

  return (
    <div className="App">App
      <div id="quote-box">
        <p id="text">{quoteInfo.text}</p>
        <p id="author">{quoteInfo.author}</p>
        <button id="new-quote" onClick={getQuote}>New Quote</button>
        <a href={"https://twitter.com/intent/tweet?hash..." + quoteInfo.text} id="tweet-quote">Post to twitter</a>
      </div>
    </div>
  );
}

export default App;
