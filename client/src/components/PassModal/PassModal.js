import React from "react";
import { withRouter } from 'react-router-dom'
import './PassModal.css'

function PassModal(props) {

  function enterPassHoops() {
    props.history.push('/home')
  }

  return (
    <>
      <div className='pass-modal-video-container'>
        <video
          controls
          className='pass-modal-video'
          playsInline="playsinline"
          autoPlay="autoplay"
          loop="loop"
        >
          <source src={process.env.PUBLIC_URL + "/videos/pass_vid_two.mp4"} type="video/mp4" />
        </video>
      </div>
      <div className='pass-video-text-overlay' onClick={enterPassHoops}>
        Enter the Passhoops website
      </div>
    </>
  );
}

export default withRouter(PassModal);
