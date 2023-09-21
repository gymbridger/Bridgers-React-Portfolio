import React, { useState } from "react";
import styles from "./ContactMe.module.css";

export default function ContactMe() {
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
      setEmailError("Your email is invalid");
    } else {
      setEmailError("");
    }
  };

  const handleMessageChange = (e) => {
    const message = e.target.value;

    if (message.trim() === "") {
      setMessageError("Message is required");
    } else {
      setMessageError("");
    }
  };

  return (
    <div className={styles.mainContact}>
      <form className={styles.contactContainer}>
        <h1 className={styles.contactMeHeader}>Contact</h1>
        <label className={styles.contactLabels} htmlFor="name">
          Name:
        </label>
        <input
          className={styles.formElement}
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          autoComplete="name"
          required
        ></input>
        <label className={styles.contactLabels} htmlFor="email">
          Email address:
        </label>
        <input
          className={styles.formElement}
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          autoComplete="email"
          onChange={handleEmailChange}
        ></input>
        <label className={styles.contactLabels} htmlFor="message">
          Message:
        </label>
        <textarea
          className={styles.formElement}
          id="message"
          name="message"
          rows={15}
          placeholder="Type your message here..."
          autoComplete="off"
          onChange={handleMessageChange}
        ></textarea>
        {emailError && <div className={styles.emailError}>{emailError}</div>}
        {messageError && (
          <div className={styles.messageError}>{messageError}</div>
        )}
        <input id={styles.submitButton} type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
