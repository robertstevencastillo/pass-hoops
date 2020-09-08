import React from "react"
import styled from 'styled-components';

const TextDividerStyles = styled.div`
  .text-divider{
    background-color:#DE6723;
    height:10px;
    margin-top:1rem;
    margin-bottom:2rem;
    width:10rem;
  }
`;

function TextDivider(props) {
  return (
    <TextDividerStyles>
      <div className='text-divider'>
      </div>
    </TextDividerStyles>
  )
}

export default TextDivider