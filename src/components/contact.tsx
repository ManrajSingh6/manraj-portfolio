import "./contacts.css";
import { RiMailSendLine } from "react-icons/ri";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const EMAILJS_SERVICE_ID = "service_fb5vecp";
const EMAILJS_TEMPLATE_ID = "template_cvt8ayj";
const EMAILJS_PUBLIC_KEY = "48wvcdcHtnKo7qAAo";

const SUCCESS_STATUS = 200;

interface ContactFormInputFields {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const form =
    useRef<HTMLFormElement>() as React.MutableRefObject<HTMLFormElement>;

  const [contactFormFields, setContactFormFields] =
    useState<ContactFormInputFields>({
      name: "",
      email: "",
      message: "",
    });

  function updateContactFormFields(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setContactFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function submitContactForm(event: React.FormEvent) {
    event.preventDefault();

    const mailSendResponse = await emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form.current,
      EMAILJS_PUBLIC_KEY
    );

    if (mailSendResponse.status !== SUCCESS_STATUS) {
      toast.error("Error sending mail.");
      return;
    }

    toast.success("Successfully sent email.");
    setContactFormFields({ name: "", email: "", message: "" });
  }

  return (
    <div className="contacts-main" id="Contact">
      <div className="contacts-parent">
        <p>I'd Love to Chat!</p>
        <div className="section-header-container">
          <h1>Contact</h1>
          <div className="line"></div>
        </div>
        <div className="contact-form-container">
          <form onSubmit={submitContactForm} ref={form}>
            <label htmlFor="name" style={{ marginTop: "0" }}>
              Name
            </label>
            <input
              required
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={contactFormFields.name}
              onChange={updateContactFormFields}
            />
            <label htmlFor="email">Email</label>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={contactFormFields.email}
              onChange={updateContactFormFields}
            />
            <label htmlFor="message">Message</label>
            <textarea
              required
              rows={5}
              cols={10}
              id="message"
              name="message"
              placeholder="Message"
              value={contactFormFields.message}
              onChange={updateContactFormFields}
            />
            <button type="submit">
              <RiMailSendLine fontSize="1.5rem" />
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
