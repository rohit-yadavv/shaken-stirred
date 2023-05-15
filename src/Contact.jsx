import React from "react";
import styled from "styled-components";
import { GrLinkedin, GrFacebook, GrInstagram } from "react-icons/gr";
const Contact = () => {
  return (
    <Wrapper>
      <h3>Contact Us</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d326.60184916944763!2d76.14476871393857!3d28.358222550591123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912953414337099%3A0x9ec78bf1baa19330!2sHOMI%20J%20BHABHA%20BOYS%20HOSTEL!5e0!3m2!1sen!2sin!4v1683889864630!5m2!1sen!2sin"
        width="80%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <FormWrapper>
        <Form>
          <form
            action="https://formspree.io/f/xbjebgza"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
            />

            <input type="email" name="Email" placeholder="Email" required />
            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </Form>
      </FormWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #230312;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  h3 {
    color: white;
    padding: 50px 10px;
    font-size: 50px;
  }
`;

const FormWrapper = styled.section`
  margin-top: 6rem;
  width: 100%;
`;
const Form = styled.section`
  width: 100%;
  padding: 30px;
  margin: auto;
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }

  input[type="submit"] {
    max-width: 10rem;
    margin-bottom: 2rem;
    background-color: #ff0877;
    color: #fefefe;
    padding: 1rem 0.6rem;
    border-style: solid;
    border-width: 0.1rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: scale(0.9);
    }
  }
  input,
  textarea {
    border-radius: 50px;
    max-width: 50rem;
    width: 100%;
    background-color: #1d000d;
    padding: 1.6rem 2.4rem;
    border: 1px solid;
    border-color: #fefefe93;
    text-transform: uppercase;
    color: #dedddde4;
  }
`;

export default Contact;
