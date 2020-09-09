import React from "react"
import DisplaySocialMediaStyles from './DisplaySocialMediaStyles'
import InstagramEmbed from 'react-instagram-embed';
import TextDivider from '../TextDivider/TextDivider'

function DisplaySocialMedia(props) {
  return (
    <DisplaySocialMediaStyles>
      <div className='display-social-media-container'>
        <h3>
          <em>Check us out on Instagram <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/p.a.s.s.hoops/'>@p.a.s.s.hoops</a>
          </em>
        </h3>
        <TextDivider />
        <div className='social-media-posts'>
          <InstagramEmbed className='social-media-post' url='https://www.instagram.com/p/CEu-Nzqph93/' />
          <InstagramEmbed className='social-media-post' url='https://www.instagram.com/p/CEsgieNJ-ZV/' />
          <InstagramEmbed className='social-media-post' url='https://www.instagram.com/p/CEr_ZO3J_Zd/' />
        </div>
      </div>
    </DisplaySocialMediaStyles>
  )
}

export default DisplaySocialMedia