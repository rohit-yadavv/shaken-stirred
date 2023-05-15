import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Drink = (curElem) => {
  const { idDrink, strDrink, strDrinkThumb } = curElem;
  return (
    <NavLink to={`/detail/${idDrink}`} className="link">
      <Card>
        <img src={strDrinkThumb} alt={strDrink} />
        <Data>
          <h3>{strDrink}</h3>
        </Data>
      </Card>
    </NavLink>
  );
};
const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #1d000d;
  width: 250px !important;
  gap: 0px !important;
  height: 220px;

  @media (max-width: 600px) {
    width: 290px !important;
  }

  img {
    height: 150px;
    width: 100%;
  }

  &:hover {
    img {
      transform: scale(1.02);
    }
  }
`;
const Data = styled.div`
  height: 50px;
  text-decoration: none;
  font-size: 12px;
  color: white;
  display: flex;
  &:hover {
    color: #cd7509;
  }
`;
export default Drink;
