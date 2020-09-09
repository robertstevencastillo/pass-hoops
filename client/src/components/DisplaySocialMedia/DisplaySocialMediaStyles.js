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
    margin-right:2.5rem;
  }

  h3{
    text-align:center;
  }

  h3 em a{
    text-decoration:none;
    color:black;
  }

  h3 em a:hover{
    color:#DE6723;
  }

@media screen and (max-width:1100px){
  .social-media-posts{
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }

  .social-media-post{
    margin-right:auto;
    margin-left:auto;
    margin-bottom:2rem;
    width:45rem;    
  }
}

@media screen and (max-width:780px){
  .social-media-post{
    width:35rem;
  }
}

@media screen and (max-width:780px){
  .social-media-post{
    width:20rem;
  }
}

@media screen and (max-width:400px){
  .social-media-post{
    width:100%;
    max-width:100%;
  }
}

`;

export default DisplaySocialMediaStyles;