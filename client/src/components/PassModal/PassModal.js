import React, { useRef, useEffect } from "react";
import { withRouter } from 'react-router-dom'
import './PassModal.css'

function PassModal(props) {
  const videoElementRef = useRef(null);

  useEffect(() => {
    videoElementRef.current.play();
  }, [])

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
          ref={videoElementRef}
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
