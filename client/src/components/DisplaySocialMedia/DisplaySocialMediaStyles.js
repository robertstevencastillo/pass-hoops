import styled from 'styled-components';

const DisplaySocialMediaStyles = styled.div`
  .display-social-media-container{
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  .social-media-posts{
    display:flex;
    flex-direction:row;
  }

  .social-media-post{
    margin-right:2rem;
  }

  h3 em a{
    text-decoration:none;
    color:black;
  }

  h3 em a:hover{
    color:#DE6723;
  }

@media screen and (max-width:1110px){
  .social-media-posts{
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }

  .social-media-post{
    margin-right:0;
    margin-bottom:2rem;
    width:100%;
  }
}
`;

export default DisplaySocialMediaStyles;