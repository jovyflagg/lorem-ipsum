import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    
    setText(data.slice(0,amount));
  }
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          min="0"
          max={data.length}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit" >generate</button>
      </form>
      <article className='lorem-text'>
        {
          text.map((item, index)=>{
            return(
              <p key={index}>{item}</p>
            )
          })
        }
      </article>
    </section>
  )
}



export default App;
