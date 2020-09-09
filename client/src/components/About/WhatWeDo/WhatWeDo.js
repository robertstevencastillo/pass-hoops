import React from "react"
import WhatWeDoStyles from './WhatWeDoStyles'
import SectionDivider from '../../SectionDivider/SectionDivider'
import TextDivider from '../../TextDivider/TextDivider'

function WhatWeDo(props) {
  return (
    <WhatWeDoStyles>
      {/* <div className='divider'></div> */}
      <SectionDivider />
      <div className='what-we-do-container'>
        <h3><em>What We Do</em></h3>
        <TextDivider />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <div className='what-we-provide-section'>
          <div className='what-we-provide-item'>
            <div className='what-we-provide-item-image'></div>
            <h3>Private Training</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='what-we-provide-item-button'>
              <span>Learn More</span>
            </div>
          </div>

          <div className='what-we-provide-item'>
            <div className='what-we-provide-item-image'></div>
            <h3>Group Training</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='what-we-provide-item-button'>
              <span>Learn More</span>
            </div>
          </div>
        </div>

      </div>
    </WhatWeDoStyles>
  )
}

export default WhatWeDo