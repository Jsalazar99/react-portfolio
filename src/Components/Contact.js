import React, { useState } from 'react';

const { name, email, message, errorMessage } = "";

function Contact() {
  // Create state variables and set initial values to an empty string
  /* const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setPassword(inputValue);
    }
  }; */
/*
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    /* if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return; 
    } 
    alert(`Hello ${name}`);
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    //setPassword('');
    setEmail('');
  }; */

  return (
    <div>
      <h2>Contact Me</h2>
      <p>Use this form to send me a message to get in contact. </p>
      <form className="form">
      <input
          value={name}
          name="name"
          //onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          //onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          //onChange={handleInputChange}
          type="textarea"
          placeholder="Message here."
        />
        <button type="button" /*onClick={handleFormSubmit}*/>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
