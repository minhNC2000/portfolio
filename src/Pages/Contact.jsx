import React, { useEffect, useRef } from "react";
import "../Assets/scss/Pages/contact.scss";
import { Container, Grid } from "@mui/material";

import emailjs from "emailjs-com";
import { Bounce, ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
const Contact = () => {

  const formRef = useRef();

  useEffect(() => {
    emailjs.init("portfolio_w2irtvi");

    const form = formRef.current;
    const nameInput = form.name;
    const emailInput = form.email;
    const messageInput = form.message;
    const submitButton = form.querySelector('button[type="submit"]');

    const validateForm = () => {
      const isNameEmpty = nameInput.value === "";
      const isEmailEmpty = emailInput.value === "";
      const isMessageEmpty = messageInput.value === "";

      submitButton.disabled = isNameEmpty || isEmailEmpty || isMessageEmpty;
    
    };

    nameInput.addEventListener("input", validateForm);
    emailInput.addEventListener("input", validateForm);
    messageInput.addEventListener("input", validateForm);

    validateForm();
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (name === "" || email === "" || message === "") {
      alert("Vui lòng nhập đủ thông tin");
      return;
    }
    emailjs.sendForm(
      "portfolio_w2irtvi",
      "template_wyxeuzl",
      e.target,
      "xegrU455yk9cb46b4"
    );
    toast.success("🤷‍♂️ Gửi thành công!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    e.target.reset();
  };
  return (
    <>
    <Helmet>
      <title>{`Portfolio | Contact`}</title>

      <meta name="description" content="This is resume page" />
      <meta property="og:title" content="My Resume" />
      <meta property="og:description" content="This is resume page" />
    </Helmet>

    <div className="contact">
      <Container maxWidth="md">
        <h1>Contact</h1>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className="phone">
              <div className="content">
                <h3>Phone :</h3>
                <a href="tel:0834262000">0834262000</a>
                <a href="tel:0973045725">0973045725</a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className="email">
              <div className="content">
                <h3>Email :</h3>
                <a href="mailto:nguyencongminhm@gmail.com">
                  nguyencongminhm@gmail.com
                </a>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="contact-form" >
              <p>
                Please <b>contact me</b> if you need me !!
              </p>
              <form ref={formRef} onSubmit={sendEmail}>
                <label htmlFor="name">Name :</label>
                <input type="text" name="name" />
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" />
                <label htmlFor="message">Message :</label>
                <textarea name="message"></textarea>
                <button type="submit">Send</button>
                <ToastContainer transition={Bounce} />
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
    </>
  );
};

export default Contact;
