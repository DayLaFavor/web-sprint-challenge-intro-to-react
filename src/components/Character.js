// Write your Character component here
import styled from "styled-components";

const Styleness = styled.div`
display: flex;
flex-direction: column;
width: 60%;
align-items: center;
border: 2px dashed black; 
margin: 5%;
padding: 1%;
color: 'purple'
opacity: 0.4;
transform: scale(1.1); 
animation: ${kf} 0.1s ease-in-out forwards;
`

export default function Character({items}) {

    return(
        <div className='container'>
        <Styleness/>
         {items.map((item)=>(
            <CharacterCard item = {item} key={item.id}/>
         ))
         }
        </div>
    )} 

    const kf = keyframes`
    100% {
      opacity: 1;
      transform: scale(1);
  }
`