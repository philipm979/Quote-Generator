

const newQuote = ({ButtonClick}) => {
    return (
        <div className='tc pa2'>
          <button onClick = {ButtonClick} className='pa2 br2 shadow'>New Quote!</button>  
        </div>
        )
}

export default newQuote;