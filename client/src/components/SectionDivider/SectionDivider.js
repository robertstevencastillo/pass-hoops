import React from "react"
import styled from 'styled-components';

const SectionDividerStyles = styled.div`
  .divider{
    background-color:#DE6723;
    height:50px;
    margin-bottom: 4rem;
  }
`;

function SectionDivider(props) {
  return (
    <SectionDividerStyles>
      <div className='divider'></div>
    </SectionDividerStyles>
  )
}

export default SectionDivider