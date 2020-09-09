import styled from 'styled-components';

const TryUsStyles = styled.div`
  .try-us-container{
    background-color:#0e1111;
    color:white;

    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:4rem;
  }

  .try-us-content{
    display: flex;
    flex-direction:column;
    align-items:center;
    margin-top:3rem;
  }

  .try-us-content p{
    text-align:center;
    width:65%;
  }

  .try-us-content-button-container{
    margin-top:1rem;
    margin-bottom:3rem;
    border:solid 1px white;
    width:10rem;
    height:auto;
    padding:0.5rem;
    text-align:center;
  }

  .try-us-content-button-container:hover{
    cursor:pointer;
    background-color:gray;
  }

  @media screen and (max-width:900px){
    .try-us-content p{
      width:90%;
    }
  }
`;

export default TryUsStyles;