import React from "react";
import styled from 'styled-components'

const JumbotronStyles = styled.div`
.hero-container{
  height:350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-image{
  z-index:0;
  height:100%;
  width:70rem;
  background-image: url(${process.env.PUBLIC_URL + "/images/pass-logo.jpg"});
  background-repeat: no-repeat;
  background-position:center center;
  ${'' /* background-size: 100% 100%; */}
  max-width: 100%;
  max-height: 100%;
}

@media screen and (max-width:780px){
  .hero-image{
    background-size: 100% 100%;
  }
}

@media screen and (max-width:600px){
  .hero-image{
    width:100%;
  }
}
`;

function IntroJumbotron(props) {
  return (
    <JumbotronStyles>
      <div className='hero-container'>
        <div className='hero-image'>
        </div>
      </div>
    </JumbotronStyles>
  );
}

// https://www.pwtuts.com/processwire-tutorials/creating-a-bootstrap-4-jumbotron-with-background-image/

//Make this a styled component, and make the background image a prop

export default IntroJumbotron;
