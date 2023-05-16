import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const About = () => {
  return (
    <Wrapper>
      <Container>
        <Info>
          <h3>Shaken & Stireed</h3>
          <p>
            Welcome to our website showcasing some of the most delicious and
            creative cocktails around! Whether you're a seasoned mixologist or a
            newcomer to the world of mixology, you're sure to find something
            here that will tantalize your taste buds. At our website, we believe
            that a great cocktail is more than just a drink - it's a work of
            art. That's why we've assembled a team of expert mixologists who are
            dedicated to creating unique, flavorful cocktails that are sure to
            impress. Our website is divided into several sections, each of which
            highlights a different aspect of our cocktail collection. In our
            "Classics" section, you'll find all the tried-and-true favorites,
            from the timeless Manhattan to the refreshing Mojito. If you're
            looking for something a little more adventurous, be sure to check
            out our "Signature" section. Here, you'll find cocktails that have
            been specially crafted by our mixologists, using only the freshest
            and most flavorful ingredients. From fruity and tropical to bold and
            spicy, there's something here for every taste. For those who are
            looking for a more low-key cocktail experience, we also offer a
            selection of "Mocktails" - delicious, alcohol-free drinks that are
            perfect for any occasion. Finally, our website also includes a
            "Mixology 101" section, which is dedicated to teaching our visitors
            the art of mixology. Whether you're a complete beginner or a
            seasoned pro, you'll find plenty of useful tips and techniques here
            to help you take your cocktail game to the next level. So whether
            you're looking to try something new or just want to indulge in an
            old favorite, we invite you to explore our website and discover the
            amazing world of cocktails. Cheers
          </p>
          <button>
            <NavLink className="link" to="/cocktails">
              Explore
            </NavLink>
          </button>
        </Info>
        <Images>
          <img src="/assets/cocktail-png-13.png" alt="" />
          <img src="/assets/784kkl_large.png" alt="" />
          <img src="/assets/pngkey.com-martini-glass-png-949522 (1).png" />
        </Images>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 20px;
  background-color: #230312;
  color: white;
  .link {
    text-transform: none;
    color: white;
  }
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
    text-align: center;
    padding-bottom: 50px;
  }
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.2rem;
    line-height: 1.6;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 25rem;
    height: 20rem;
    @media (max-width: 450px) {
      width: 15rem;
      height: 15rem;
    }
  }
`;
export default About;
