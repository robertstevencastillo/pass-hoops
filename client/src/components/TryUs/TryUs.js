import React from "react"
import TextDivider from '../TextDivider/TextDivider'
import TryUsStyles from './TryUsStyles'

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