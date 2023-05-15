import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Wrapper>
      <NavLink to="/">
        <img src="/public/assets/logo1.png" />
      </NavLink>
      <Navbar />
    </Wrapper>
  );
};
const Wrapper = styled.header`
  background-color: #230312;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  padding: 15px 30px 0px;
  box-sizing: border-box;
  img {
    width: 280px;
    height: 150px;
  }
`;

export default Header;
