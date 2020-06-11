import React, { useState } from 'react';
import {Message} from './Message'

import './App.css';


function App() {
  let[count, setCount] = useState(0)
  let[isMorning, setDay]= useState(true)
  
  return (
    <div className={`box ${isMorning ? 'dayLight' :''}`}>
      <h1>Have a good {isMorning ? 'Morning': 'Night'}</h1>
      {/* <h2>Value of count  = {count}</h2> */}
      <Message counter={count}/>
      <br/>
      <button onClick={
        ()=>setCount(count + 1) 
        }>
          Update Counter</button>
          <button
           onClick={()=>setDay(!isMorning)}>
            Update Day</button>
    </div>
  );
}

export default App;
