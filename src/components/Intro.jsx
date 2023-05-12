import React from "react";
import styled from "styled-components";

const Intro = () => {
  return (
    <Wrapper>
      <Container>
        <Info>
          <h5>Welcome to</h5>
          <h3>Shaken & Stireed</h3>
          <p>
            Get ready to shake up your taste buds with our cocktail menu! From
            classic favorites to modern twists, <br />
            our carefully curated ingredients and expert bartenders create
            visually stunning <br /> and bursting-with-flavor drinks that will
            leave you wanting more.
            <br />
            Come sip, savor, and enjoy our unique cocktail creations!
          </p>
          <button>Explore</button>
        </Info>
        <Images>
          <img src="../public/assets/cocktail1.png" alt="" />
        </Images>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 20px;
  color: white;
`;
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0px 50px;
  @media (max-width: 850px) {
    padding: 0px;
  }
`;
const Info = styled.div`
  padding-top: 4rem;
  h5 {
    color: #3dd8fc;
  }
  h3 {
    font-size: 4rem;
  }
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
  }
  button {
    width: 150px;
    height: 50px;
    border-radius: 10px;
    background-color: #2d61e9;
    color: #78fa5f;
    margin: 50px 10px;
    &:hover,
    &:active {
      box-shadow: 0px 7px 2rem 1px #f752e0;
      transform: scale(0.96);
    }
  }
  @media (max-width: 850px) {
    padding: 5px;
    h3 {
      font-size: 3rem;
    }
  }
`;
const Images = styled.div`
  img {
    width: 25rem;
    height: 20rem;
    @media (max-width: 450px) {
      width: 15rem;
      height: 15rem;
    }
  }
`;
export default Intro;