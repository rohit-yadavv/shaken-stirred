import React from "react";
import styled from "styled-components";
import { BsFillHeartFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <Wrapper>
      <Logo>
        <img src="/public/assets/logo.png" alt="" />
      </Logo>
      <hr />
      <Tagline>
        <span>
          Made With <BsFillHeartFill className="heart_img" /> By Rohit
        </span>
        <span>for</span>
        <span>ALCOHOLIC FRIENDS</span>
      </Tagline>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  background-color: #1d000d;
  height: 250px;

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
  width: 100%;

  .heart_img {
    color: red;
    display: inline-block;
    position: relative;
    top: 2px;
  }
`;

export default Footer;
