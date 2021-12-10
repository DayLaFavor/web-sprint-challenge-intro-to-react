import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [star, setStar] = useState();
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
    
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        console.log(res.data);
        setStar(res.data);
      })
      .catch(err => console.log(err));
  });

 
  
  const divStyle = styled.div`
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom:10%;
`

  return (
    <div className="App">
    <h1 className="Header">Characters</h1>
    <divStyle>
    {
      star && star.map(info => {
        return <Character key={info.name}
        info={info}/>;
       })
   }
    </divStyle>
    </div>
  );
};

export default App;