import styled from 'styled-components';

const FooterStyles = styled.footer`
  .footer-container{
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  .connect-with-us-container{
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:2rem;
  }
  
  .social-media-links-container {
    list-style-type:none;
    display:flex;
    justify-content:center;
  }

  .social-media-links-container li{
    display: inline-block;
  }

  .social-media-links-container li a{
    font-size:45px;
    margin-right:4rem;
    padding:0 40px;
  }
  
  .social-media-links-container li a i{
    color:#DE6723;
  }
  
  .social-media-links-container li a i:hover{
    cursor:pointer;
    color:black;
    transition: all 0.2s ease-in;
  }

  .section-border-skinny{
    width:100%;
    border:solid 1px #DE6723;
    margin-bottom:2rem;
  }

  .copyright-info{
    font-size:20px;
    text-align:center;
  }

  @media screen and (max-width:680px){
    .social-media-links-container li a{
      padding: 0 15px;
      margin-right: 0;
    }
  }
`
  ;

export default FooterStyles;