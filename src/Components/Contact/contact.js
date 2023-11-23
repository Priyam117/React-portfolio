import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

import './contact.css';
import instaIcon from '../../assets/instagram.png';
import fbIcon from '../../assets/facebook-icon.png';
import githubIcon from '../../assets/1221583_github_logo_media_social_icon.png';
// import ytIcon from '../../assets/youtube.png';
import linkedIcon from '../../assets/317750_linkedin_icon.png';

const Contact = () => {
  const form = useRef();
  const customAlert = useRef();
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const inputFields = form.current.querySelectorAll('input, textarea');

    const handleInput = () => {
      setIsTyping(true);
      hideCustomAlert();
    };

    const handleBlur = () => {
      setIsTyping(false);
    };

    const handleChange = () => {
      hideCustomAlert();
    };

    inputFields.forEach((field) => {
      field.addEventListener('input', handleInput);
      field.addEventListener('blur', handleBlur);
      field.addEventListener('change', handleChange);
    });

    return () => {
      inputFields.forEach((field) => {
        field.removeEventListener('input', handleInput);
        field.removeEventListener('blur', handleBlur);
        field.removeEventListener('change', handleChange);
      });
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current['from_name'].value;
    const email = form.current['from_email'].value;
    const message = form.current['message'].value;

    if (!name.trim() || !email.trim() || !message.trim() || !isValidEmail(email)) {
      showCustomAlert("Please fill in all required fields with valid information.");
      return;
    }

    emailjs.sendForm('service_ewcncj4', 'template_ljnj3mb', form.current, 'DDl8uKcq7XkfyxDjJ')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        showCustomAlert("Email sent successfully!", true);
      })
      .catch((error) => {
        console.error(error.text);
        showCustomAlert("Error sending email. Please try again.");
      });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const showCustomAlert = (message, isSuccess = false) => {
    if (isTyping) {
      return;
    }

    customAlert.current.innerText = message;
    customAlert.current.style.backgroundColor = isSuccess ? "#4CAF50" : "#f44336";
    customAlert.current.style.color = "#fff";
    customAlert.current.style.padding = "10px";
    customAlert.current.style.borderRadius = "5px";
    customAlert.current.style.position = "fixed";
    customAlert.current.style.top = "10px";
    customAlert.current.style.left = "50%";
    customAlert.current.style.transform = "translateX(-50%)";
    customAlert.current.style.zIndex = "1000";

    if (customAlert.current.timeoutId) {
      clearTimeout(customAlert.current.timeoutId);
    }

    customAlert.current.timeoutId = setTimeout(() => {
      customAlert.current.innerText = "";
      customAlert.current.style.padding = "0";

    }, 3000);
  };

  const hideCustomAlert = () => {
    customAlert.current.innerText = "";
    customAlert.current.style.padding = "0";
  };

  return (
    <section id='contactPage'>
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your name' name='from_name' />
          <input type="email" className="email" placeholder='Your email' name='from_email' />
          <textarea className='msg' placeholder='Your message' rows="5" name="message"></textarea>
          <button type='submit' value='Send' className="submitBtn">Submit</button>
          <div className="links">
            <img src={instaIcon} alt="" className="link" onClick={() => window.open('https://www.instagram.com/priyam_gautam/', '_blank')} />
            <img src={fbIcon} alt="" className="link" onClick={() => window.open('https://github.com/Priyam117', '_blank')} />
            <img src={linkedIcon} alt="" className="link" onClick={() => window.open('https://www.linkedin.com/in/priyamgautam790251227/', '_blank')} />
            <img src={githubIcon} alt="" className="link" onClick={() => window.open('https://github.com/Priyam117', '_blank')} />
            {/* <img src={linkedIcon} alt="" className="link" onClick={() => window.open('', '_blank')} /> */}
          </div>
        </form>
      </div>
      <div ref={customAlert} id="custom-alert"></div>
    </section>
  );
};

export default Contact;
