import React, { useState } from "react";
import styled from "styled-components";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  return (
    <Wrapper>
      <Nav>
        <ul className={menuIcon ? "active-navbar-lists" : "navbar-lists"}>
          <li>
            <NavLink
              className="nav_link"
              to="/"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav_link"
              to="/about"
              onClick={() => setMenuIcon(false)}
            >
              AboutUs
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav_link"
              to="/cocktails"
              onClick={() => setMenuIcon(false)}
            >
              Cocktails
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav_link"
              to="/contact"
              onClick={() => setMenuIcon(false)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="menu_button">
          <BiMenuAltRight
            className={menuIcon ? "menu_icon" : ""}
            onClick={() => setMenuIcon(true)}
          />
          <MdClose
            className={menuIcon ? "" : "menu_icon"}
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </Nav>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
const Nav = styled.nav`
  .navbar-lists {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2rem;
    position: relative;
    bottom: 30px;
  }

  .nav_link {
    font-size: 1.5rem;
    text-decoration: none;
    color: #3dd8fc;
    font-family: "Quicksand", sans-serif;

    &:hover {
      color: #f752e0;
    }
  }
  .menu_button {
    display: none;
    cursor: pointer;
  }
  @media (max-width: 850px) {
    .menu_button {
      display: inline-block;
      font-size: 2.5rem;
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 9999;
    }
    .menu_icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      z-index: 9999;
    }

    .navbar-lists {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #230312;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;
      /* z-index: 999; */
      padding: 30px 0px;
      opacity: 0;
      list-style: none;
      z-index: -5;
    }
    .active-navbar-lists {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #230312;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;
      z-index: 999;
      padding: 30px 0px;
      opacity: 1 !important;
      list-style: none;
    }

    li {
      font-size: 2.5rem;
    }
  }
`;

export default Navbar;
