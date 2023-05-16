import React from "react";
import styled from "styled-components";
import { useAppProvider } from "./context/HomeContext";
import Drink from "./components/Drink";
import { useFilterProvider } from "./context/FilterContext";

const CocktailsPage = () => {
  const { ChangeAlpha, CocktailsPage, FilterAlpha } = useFilterProvider();

  const Alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <Wrapper>
      <Filters>
        <p>Filter By First Letter</p>
        <div>
          {Alpha.map((item) => (
            <button value={item} key={item} onClick={ChangeAlpha}>
              {item}
            </button>
          ))}
        </div>
      </Filters>
      <CardWrapper>
        <hr />
        <h3 className="category-heading">
          COCKTAILS STARTS WITH {FilterAlpha}
        </h3>
        <div>
          {CocktailsPage.map((curElem, index) => {
            return <Drink key={index} {...curElem} />;
          })}
        </div>
      </CardWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #230312;
  padding: 30px;
  @media (max-width: 600px) {
    padding: 20px 5px;
  }
`;
const Filters = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin: 50px;
  @media (max-width: 600px) {
    margin: 10px;
    gap: 10px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  button {
    padding: 1px 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #cd7509;
    color: white;
    width: 35px;
    &:hover {
      color: #cd7509;
      background-color: #230312;
    }
  }
`;
const CardWrapper = styled.div`
  width: 100%;

  hr {
    border-color: #ffffff33;
  }
  .category-heading {
    color: white;
    text-align: center;
    padding: 30px;
    text-shadow: 1px 2px 2px #f693b9;
    padding-bottom: 60px;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 10px;
    gap: 30px;
    img {
      width: 100%;
      height: 80%;
      border-radius: 10px;
    }
    p {
      height: 20%;
      padding: auto;
    }
  }
`;
export default CocktailsPage;
