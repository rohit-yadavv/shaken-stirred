import React from "react";
import styled from "styled-components";
import { BsFillHeartFill } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";
import { GrLinkedin, GrFacebook, GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Wrapper>
      <Logo>
        <img src="/assets/logo.png" alt="" />
      </Logo>
      <hr />
      <Others>
        <Tagline>
          <span>
            Made With <BsFillHeartFill className="heart_img" /> By Rohit
          </span>
          <span>for</span>
          <span>ALCOHOLIC FRIENDS</span>
        </Tagline>
        <Links>
          <Info>
            <a href="mailto:rk4740779@gmail.com">
              Email: <span> rk4740779@gmail.com</span>
            </a>
            <a href="tel:+8278068442">
              Ph NO: <span> 8278068442</span>
            </a>
          </Info>

          <Social>
            <Link
              rel="stylesheet"
              to="https://www.instagram.com/rewarrior_532/?hl=en"
            >
              <GrInstagram color="#ffffffd8" />
            </Link>
            <Link
              rel="stylesheet"
              to="https://www.facebook.com/RohitYadav.532/"
            >
              <GrFacebook color="#ffffffd8" />
            </Link>
            <Link
              rel="stylesheet"
              to="https://www.linkedin.com/in/rohit-yadav-240448255/"
            >
              <GrLinkedin color="#ffffffd8" />
            </Link>
            <Link rel="stylesheet" to="https://rohityadavv.netlify.app/">
              <SiAboutdotme fontSize="30px" color="#ffffffd8" />
            </Link>
          </Social>
        </Links>
      </Others>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  background-color: #1d000d;

  hr {
    border-color: #ffffff33;
  }
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 300px;
    height: 150px;
    cursor: pointer;
  }
`;

const Tagline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  height: 98px;

  .heart_img {
    color: red;
    display: inline-block;
    position: relative;
    top: 2px;
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
const Links = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  a {
    text-decoration: none;
    color: #ffffff90;
    span {
      color: #ffffffe0;
    }
  }
`;
const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  gap: 20px;
  padding: 10px 20px;
`;
const Others = styled.div`
  padding-bottom: 10px;
`;

export default Footer;
