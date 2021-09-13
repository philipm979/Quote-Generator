import React, { useState, useEffect } from 'react';
import QuoteDisplay from './components/QuoteDisplay';
import NewQuote from './components/NewQuote';
import './App.css';



function App() {

  const [quotes, setQuotes] = useState([]);
  const [result, setResult] = useState({});
  
  

useEffect(() => {
      fetch('https://type.fit/api/quotes')
      .then(response=> response.json()
      .then(quotes => setQuotes(quotes)))
  },[])
  

useEffect(() => {
    fetch('https://type.fit/api/quotes')
    .then(response=> response.json()
    .then(quotes => setResult(randomItem(quotes))
  ))
},[])



const randomItem = (quotes) => 

{
  return (quotes[Math.floor(Math.random()*quotes.length)]); 
}


const displayQuote = (randomQuote) => {
  setResult (randomQuote)
}



const ButtonClick = () => {
  displayQuote(randomItem(quotes))
}



if (quotes.length === 0) {
  
 return null } else {
   
  return (
  
    <div className='App font'>
        <QuoteDisplay result={result}></QuoteDisplay>
        <NewQuote ButtonClick={ButtonClick}></NewQuote>
    </div>
    
    );
  
  }
}

export default App;



