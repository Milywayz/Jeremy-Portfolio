import React, { useState } from "react";
import ContactCss from "./contact.module.css";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  // UseStates
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [focused, setFocused] = useState(false);

  // Imputing the form
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either name, email, or message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleBlur = () => {
    setFocused(false);
  };
  // Submitting the form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // validating email
    if (name.length < 1) {
      setErrorMessage("Name must have at least one characters");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");

      return;
    }
    if (message.length < 10) {
      setErrorMessage("Message must have at least ten characters");
      return;
    }
    setFocused(true);
    // Clears out forms
    setMessage("");
    setName("");
    setEmail("");
    setErrorMessage("");
  };

  return (
    <section class="card-panel blue-grey darken-1">
      <h4 className="cyan-text">Contact Me</h4>
      <div
        className={ContactCss.form}
        style={{ width: "75%", display: "flex" }}
      >
        <form className="form">
          {!focused && errorMessage && (
            <div>
              <p
                className="error-text red-text"
                style={{ textAlign: "center", fontSize: "25px" }}
              >
                {errorMessage}
              </p>
            </div>
          )}
          <div className="input-wrapper">
            <label htmlFor="name">Name:</label>
            <input
              value={name}
              name="name"
              onBlur={handleBlur}
              onChange={handleInputChange}
              type="text"
              id="name"
              placeholder="Name"
              style={{ width: "750px", height: "40px" }}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email:</label>
            <input
              value={email}
              name="email"
              onBlur={handleBlur}
              onChange={handleInputChange}
              type="email"
              id="email"
              placeholder="Email"
              style={{ width: "750px", height: "40px" }}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="message">Message:</label>
            <input
              value={message}
              name="message"
              onBlur={handleBlur}
              onChange={handleInputChange}
              type="text"
              id="message"
              placeholder="Message"
              style={{ width: "750px", height: "40px" }}
            />
          </div>
          <p
            className="white-text"
            style={{ textAlign: "center", fontSize: "25px" }}
          >
            Feel free to reach out to me with any questions you may have and I
            will make sure to respond back to you by email between 2-3 business
            days
          </p>
          <a
            href="#a"
            className="waves-effect waves-light btn"
            type="button"
            onClick={handleFormSubmit}
          >
            Submit
          </a>
        </form>
      </div>
    </section>
  );
}
