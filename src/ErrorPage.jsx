import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #230312;
  color: #ffffff;
  .container {
    text-align: center;

    h2 {
      font-size: 10rem;
      color: #f752e0;
    }

    h3 {
      font-size: 4.2rem;
      color: #2d61e9;
    }

    p {
      margin: 2rem 0;
    }
  }
`;
const Button = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background-color: #2d61e9;
  color: #78fa5f;
  margin: 50px 10px;
  cursor: pointer;
  &:hover,
  &:active {
    box-shadow: 0px 7px 2rem 1px #f752e0;
    transform: scale(0.96);
  }
`;

export default ErrorPage;
