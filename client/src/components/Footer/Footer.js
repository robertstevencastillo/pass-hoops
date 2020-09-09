import React from "react"
import FooterStyles from './FooterStyles';
import SectionDivider from '../SectionDivider/SectionDivider'

function Footer(props) {
  return (
    <FooterStyles>
      <SectionDivider />
      <footer className='footer-container'>
        <div className='connect-with-us-container'>
          <h2><em>Connect With Us</em></h2>
          <ul className='social-media-links-container'>
            <li>
              <a>
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a>
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a>
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/p.a.s.s.hoops/' target='_blank' rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='section-border-skinny'></div>
        <div className='copyright-info'>
          <p>Copyright © 2020 PASS Hoops All Rights Reserved.</p>
        </div>
      </footer>
    </FooterStyles>
  )
}

export default Footer