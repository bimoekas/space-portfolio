import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import '../styles/Contact.css'

// npm i @emailjs/browser
const Result = () => {
  return(
    <p>Your message has been succesfully sent. I will contact you soon</p>
  );
};

const Contact = () => {
  const form = useRef();
  const [result,showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_72cqwx9",
        "template_699xcli",
        form.current,
        "rjGD0upct9sN7206V"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
      showResult(true);
  };

  return (
      <form ref={form} onSubmit={sendEmail}>
        <div className="message">
          {result ? <Result/> : null }
        </div>
        <input name="name" type="text" class="feedback-input" placeholder="Name" />   
        <input name="email" type="text" class="feedback-input" placeholder="Email" />
        <input name="subject" type="text" class="feedback-input" placeholder="Subject" />
        <textarea name="message" class="feedback-input" placeholder="Message"></textarea>
        <input type="submit" value="SUBMIT"/>
      </form>
  );
};

export default Contact;