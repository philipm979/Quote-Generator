import React from 'react';

const QuoteDisplay = ({result}) => {
    return (
     
        
      <div>
      <div className='nes-balloon from-right'>
          <p style={{color: 'black'}}>{result.text}</p>
      </div>
      <p style={{color: 'white'}} class='tr'>{result.author}</p>
       
      </div>
      
    )
   
}

export default QuoteDisplay;