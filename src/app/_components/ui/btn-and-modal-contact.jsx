"use client";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import emailjs from "@emailjs/browser";
import { BtnContact } from "./btn-contact";

export const BtnAndModalContact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mo98h3m",
        "template_153843878",
        form.current,
        "52XGouyue0NUaWVBb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Message sent. Thanks! We'll get back ASAP.");
    setModal(false);
  };

  const [modal, setModal] = useState(),
    [pressed, setPressed] = useState(),
    [anim, setAnim] = useState();

  return (
    <>
      <BtnContact setModal={setModal} />

      <CSSTransition
        in={modal}
        onEnter={() => setAnim(true)}
        onExit={() => setAnim(false)}
        timeout={300}
        classNames="contact-modal"
        unmountOnExit
      >
        <section className="contact-modal" aria-label="Contact Form">
          <div
            className="contact-modal-content-wrap"
            style={{
              opacity: anim ? 1 : 0,
              transform: anim ? "translateY(0)" : "translateY(50%)",
              transition: anim
                ? "opacity 1000ms ease, transform 500ms ease"
                : "none",
            }}
          >
            <h3 className="header-form-contact">Contact Us</h3>

            <button
              className="btn-close-contact"
              aria-label="Close contact form"
              onClick={() => setModal(false)}
            />

            <div className="modal-link-wrap">
              <a
                className="modal-link-linkedin"
                href="https://www.linkedin.com/in/craig-kaufman/"
                title="View my LinkedIn profile"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
              <a
                className="modal-link-email"
                href="mailto:cdk11235@gmail.com"
                title="Shoot me an email"
                rel="noreferrer"
              >
                email
              </a>
            </div>

            <p>
              Use the Quick Links above or you can fill out the form below.
              Replies to the form are usually made within 1 business day.
            </p>

            <form className="form-contact" ref={form} onSubmit={sendEmail}>
              <input
                className="input-form-contact"
                type="text"
                placeholder="name"
                name="user_name"
                required
              />

              <p>
                Note: If you prefer to not leave your phone number,
                <br /> simply fill in a random number, or 0.
              </p>

              <input
                className="input-form-contact"
                type="tel"
                placeholder="phone #"
                name="user_tel"
                required
              />

              <input
                className="input-form-contact"
                type="email"
                placeholder="email"
                name="user_email"
                required
              />

              <textarea
                className="input-form-contact-textarea"
                placeholder="What are your project ideas?"
                name="message"
                // FIGURE OUT WHY MESSAGE BOX WON'T EXPAND ?????????????
                rows="10"
                required
              />

              <input
                className={
                  pressed ? "btn-submit-form pressed" : "btn-submit-form"
                }
                type="submit"
                value="Send"
                onMouseDown={() => setPressed(true)}
                onMouseUp={() => setPressed(false)}
                onTouchStart={() => setPressed(true)}
                onTouchEnd={() => setPressed(false)}
              />
            </form>
          </div>
        </section>
      </CSSTransition>
    </>
  );
};
