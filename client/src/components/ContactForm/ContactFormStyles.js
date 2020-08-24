import styled from "styled-components";

const ContactFormStyles = styled.div`
  .contact {
    padding: 4%;
    height: 400px;
    margin: auto;
    width: 100%;
  }
  .col-md-3 {
    background: #ff9b00;
    padding: 4%;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  .contact-info {
    margin-top: 10%;
  }
  .contact-info img {
    margin-bottom: 15%;
  }
  .contact-info h2 {
    margin-bottom: 10%;
  }
  .col-md-9 {
    background: black;
    padding: 3%;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    color: white;
  }
  .contact-form label {
    font-weight: 600;
  }
  .contact-form button {
    background-color: #ff9b00;
    color: black;
    font-weight: 700;
    width: 25%;
  }
  .contact-form button:focus {
    box-shadow: none;
  }

  .contact-form button:hover {
    color: white;
  }

  .contact-form-anchor-link {
    color: black;
  }
`;

export default ContactFormStyles;
