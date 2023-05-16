import React, { useState } from "react";
import styled from "styled-components";
import { useAppProvider } from "../context/HomeContext";
import Drink from "./Drink";

const Cocktails = () => {
  const {
    isloading,
    cocktails,
    vodka,
    tequilla,
    non_alcoholic,
    alcoholic,
    spinner,
  } = useAppProvider();
  const uniqueCocktails = cocktails.filter((item, pos) => {
    return cocktails.indexOf(item) == pos;
  });
  return (
    <Wrapper>
      <hr />
      <h3 className="category-heading">Random Drinks</h3>
      {isloading ? (
        <Spinner>
          <img src={spinner} alt="" />
        </Spinner>
      ) : (
        <div>
          {uniqueCocktails.map((curElem) => {
            return <Drink key={curElem.idDrink} {...curElem} />;
          })}
        </div>
      )}

      <hr />
      <h3 className="category-heading">Some Vodkas</h3>

      {isloading ? (
        <Spinner>
          <img src={spinner} alt="" />
        </Spinner>
      ) : (
        <div>
          {vodka.map((curElem, index) => {
            if (index < 10) {
              return <Drink key={curElem.idDrink} {...curElem} />;
            }
          })}
        </div>
      )}

      <hr />
      <h3 className="category-heading">Some Tequila</h3>

      {isloading ? (
        <Spinner>
          <img src={spinner} alt="" />
        </Spinner>
      ) : (
        <div>
          {tequilla.map((curElem, index) => {
            if (index < 10) {
              return <Drink key={curElem.idDrink} {...curElem} />;
            }
          })}
        </div>
      )}

      <hr />
      <h3 className="category-heading">Some Non Alcholic Drinks</h3>

      {isloading ? (
        <Spinner>
          <img src={spinner} alt="" />
        </Spinner>
      ) : (
        <div>
          {non_alcoholic.map((curElem, index) => {
            if (index < 10) {
              return <Drink key={curElem.idDrink} {...curElem} />;
            }
          })}
        </div>
      )}

      <hr />
      <h3 className="category-heading">Some Alcholic Drinks</h3>
      {isloading ? (
        <Spinner>
          <img src={spinner} alt="" />
        </Spinner>
      ) : (
        <div>
          {alcoholic.map((curElem, index) => {
            if (index < 10) {
              return <Drink key={curElem.idDrink} {...curElem} />;
            }
          })}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 50px;
  width: 100%;
  hr {
    border-color: #ffffff33;
    margin: 50px;
  }
  .category-heading {
    color: white;
    text-align: center;
    padding: 35px;
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
const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50px !important;
  }
`;

export default Cocktails;
