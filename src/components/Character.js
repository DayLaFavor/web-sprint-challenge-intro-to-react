// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
display: flex;
justify-content: center;
margin:15% 35% 0;
background-color: #B8860B;
border: solid black 5px;
border-radius: 10%;
padding: 2%;
`
    
const Character = props => {
    const {info} = props
    return (
        <Style>
            <p>{info.name} was born in {info.birth_year}. 
            They're {info.height}km tall.</p>
        </Style>
    )
}

export default Character;