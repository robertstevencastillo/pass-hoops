import styled from 'styled-components'

const WhatWeDoStyles = styled.div`
  p {
    width:80%;
  }
  
  .what-we-do-container{
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:5rem;
  }

  .what-we-provide-section{
    display:flex;
    flex-direction:row;
    justify-content:center;
  }

  .what-we-provide-item{
    width:40%;
    margin-top:3rem;
    margin-right:1.5rem;
    
    display:flex;
    flex-direction:column;
    align-items:center;

  }

  .what-we-provide-item-image{
    background-image: url('https://elitehoopsbasketball.com/wp-content/uploads/EliteHoopsBasketballSundaySkillsTrainingAtlanta.jpg');
    background-repeat: no-repeat;
    background-position:center center;
    width:90%;
    height:240px;
    margin-bottom:1rem;  
  }

  .what-we-provide-item-button{
    margin-top:3rem;
    border:solid 1px black;
    width: 10rem;
    text-align:center;
    padding-top:10px;
    padding-bottom:10px;
  }
  
  .what-we-provide-item-button:hover {
    cursor:pointer;
    background-color:lightgray;
  }

  .what-we-provide-item-button span{
    padding:14px 30px;
  }

  @media screen and (max-width:900px){
    .what-we-provide-section{
      flex-direction:column;
    }

    .what-we-provide-item{
      width:100%;
      margin-right:0rem;
    }

    p{
      width:90%;
      text-align:center;
    }
  }
`;

export default WhatWeDoStyles