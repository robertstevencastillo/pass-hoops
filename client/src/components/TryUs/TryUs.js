import React from "react"
import styled from 'styled-components'
import TextDivider from '../TextDivider/TextDivider'

const TryUsStyles = styled.div`
  .try-us-container{
    height:400px;
    border:solid 2px black;
    background-color:#0e1111;
    color:white;

    display:flex;
    flex-direction:column;
    align-items:center;

    padding-top:4rem;
    margin-bottom:4rem;
  }

  .try-us-content{
    display: flex;
    flex-direction:column;
    align-items:center;
    width:65%;
  }

  .try-us-content-button-container{
    margin-top:1rem;
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
    .try-us-content{
      width:100%;
      padding-left:1rem;
      padding-right:1rem;
    }
  }

`;

function TryUs(props) {
  return (
    <TryUsStyles>
      <div className='try-us-container'>
        <div className='try-us-content'>
          <h3><em>Want to train with us?</em></h3>
          <TextDivider />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='try-us-content-button-container'>
          <span>Contact Us</span>
        </div>
      </div>
    </TryUsStyles>
  )
}

export default TryUs