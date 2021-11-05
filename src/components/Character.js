// Write your Character component here
import styled from "styled-components";

const Character = styled.div`
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
const CharacterCard = ({item}) => {
    return (
   <div className='card'>
    <h3>{item.name}</h3>
    <p> Gender: {item.gender}</p>
    <p> Height: {item.height}</p>
    <p> Mass: {item.mass}</p>
    <p> Birth Year: {item.birth_year}</p>
    <p> Eye Color: {item.eye_color}</p>
    <p> Hair Color: {item.hair_color}</p>
    <p> Mass: {item.mass}</p>
    <p> Skin Color: {item.skin_color}</p>
    </div>
)}