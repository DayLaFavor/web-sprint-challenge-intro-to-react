import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';
import Details from './components/Details';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [star, setStar] = useState();
  const [buttonOpen, setButtonOpen]= useState()
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
    
  const openDetails = id => {
    const character = star.filter(item => item.id === id);
    setButtonOpen(character);
  };
  const closeDetails = () => {
    setButtonOpen();
  };



  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        console.log(res.data);
        setStar(res.data);
      })
      .catch(err => console.log(err));
  }, []);

 
  
  const StarDiv = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 50%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  
  margin-bottom:10%;
  button {
    width: 30%;
    margin-left:35%;
  }
  
`
 
  return (
    <div className="App">
    <h1 className="Header">Characters</h1>
    <StarDiv>
    {
       star && star.map(info =>
       {
           return <Character key={info.name}
               info={info}
               openDetails={openDetails}
               closeDetails={closeDetails} />;
       })
   }
   {
       buttonOpen && <Details info={buttonOpen} closeDetails={closeDetails} />
    }
    </StarDiv>
    </div>
  );
};

export default App;