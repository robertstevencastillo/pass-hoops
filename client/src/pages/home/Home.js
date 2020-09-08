import React from "react"
// import ContactForm from '../../components/ContactForm/ContactForm'
import IntroJumbotron from '../../components/IntroJumbotron/IntroJumbotron'
import WhatWeDo from '../../components/About/WhatWeDo/WhatWeDo'
import TryUs from '../../components/TryUs/TryUs'
import DisplaySocialMedia from '../../components/DisplaySocialMedia/DisplaySocialMedia'
import './Home.css'

function Home(props) {
  return (
    <div className='home'>
      <IntroJumbotron />
      <WhatWeDo />
      <TryUs />
      <DisplaySocialMedia />
      {/* <ContactForm /> */}
    </div>
  )
}

export default Home;