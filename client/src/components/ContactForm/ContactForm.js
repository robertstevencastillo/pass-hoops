import React, { useState } from "react";
import ContactFormStyles from "./ContactFormStyles";
import Swal from "sweetalert2";
import axios from "axios";

function ContactForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    const payload = {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    };

    axios
      .post("/contact", { ...payload })
      .then(data => {
        console.log(data);
        Swal.fire({
          title: `Thank you ${firstName} for your message, we'll get back to you as soon as we can`,
          icon: "success",
          timer: 3000,
        });
      })
      .catch(error => {
        Swal.fire({
          title: "Whoops looks like there was an error.",
          icon: "error",
          timer: 3000,
        });
      });

    resetForms();
  }

  function resetForms() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  }

  return (
    <ContactFormStyles>
      <div className="container contact">
        {/* //eslint-disable-next-line to the line before. */}{" "}
        <a href="#n" name="contact-form" className="contact-form-anchor-link">
          .
        </a>
        <div className="row">
          <div className="col-md-3">
            <div className="contact-info">
              <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="Contact Us" />
              <h2>Contact Us for Training</h2>
              <h4>We would love to hear from you!</h4>
            </div>
          </div>
          <div className="col-md-9">
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="fname">
                  First Name:
                </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="lname">
                  Last Name:
                </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="email">
                  Email:
                </label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="telephone">
                  Phone Number:
                </label>
                <div className="col-sm-10">
                  <input type="tel" className="form-control" id="telephone" placeholder="Enter Phone Number" name="telephone" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="message">
                  Message:
                </label>
                <div className="col-sm-10">
                  <textarea className="form-control" rows={5} id="message" defaultValue={""} value={message} onChange={e => setMessage(e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default submit-form-button">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContactFormStyles>
  );
}

export default ContactForm;
