import React, { useEffect } from "react";
import { useAppProvider } from "./context/HomeContext";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const SingleDrink = () => {
  // getting data in single drink page
  const { drinkDetail, getDetails } = useAppProvider();
  const { id } = useParams();
  const DETAILSURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  // getting url id using params
  useEffect(() => {
    getDetails(DETAILSURL);
  }, []);
  const {
    idDrink,
    strDrink,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strCategory,
    strDrinkAlternate,
    strDrinkThumb,
    strGlass,
    strInstructions,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strTags,
  } = drinkDetail;

  return (
    <Wrapper>
      <Name>
        <h3>{strDrink}</h3>
      </Name>
      <Details>
        <Images>
          <img src={strDrinkThumb} alt={strDrink} />
        </Images>

        <Info>
          <Detail>
            <h3>Glass:</h3>
            {strGlass}
          </Detail>
          <Detail>
            <h3>Category:</h3>
            {strCategory}
          </Detail>
          <Detail>
            <h3>Ingredients: </h3>
            <List>
              {strIngredient1 ? <span>{strIngredient1} </span> : ""}
              {strIngredient2 ? <span>, {strIngredient2} </span> : ""}
              {strIngredient3 ? <span>, {strIngredient3} </span> : ""}
              {strIngredient4 ? <span>, {strIngredient4} </span> : ""}
              {strIngredient5 ? <span>, {strIngredient5} </span> : ""}
              {strIngredient6 ? <span>, {strIngredient6} </span> : ""}
              {strIngredient7 ? <span>, {strIngredient7} </span> : ""}
              {strIngredient8 ? <span>, {strIngredient8} </span> : ""}
              {strIngredient9 ? <span>, {strIngredient9} </span> : ""}
            </List>
          </Detail>
          <Detail>
            <h3>Measure: </h3>
            {strMeasure1 ? <span>{strMeasure1} </span> : ""}
            {strMeasure2 ? <span>, {strMeasure2} </span> : ""}
            {strMeasure3 ? <span>, {strMeasure3} </span> : ""}
            {strMeasure4 ? <span>, {strMeasure4} </span> : ""}
            {strMeasure5 ? <span>, {strMeasure5} </span> : ""}
            {strMeasure6 ? <span>, {strMeasure6} </span> : ""}
            {strMeasure7 ? <span>, {strMeasure7} </span> : ""}
            {strMeasure8 ? <span>, {strMeasure8} </span> : ""}
            {strMeasure9 ? <span>, {strMeasure9} </span> : ""}
          </Detail>
          <Detail>
            {strTags ? (
              <Detail>
                <h3>Tags:</h3>
                {strTags}
              </Detail>
            ) : (
              ""
            )}
          </Detail>

          {strDrinkAlternate ? (
            <Detail>
              <h3>Alternates:</h3>
              {strDrinkAlternate}
            </Detail>
          ) : (
            ""
          )}
          <Detail>
            <h3>Instructions:</h3>
            <span> {strInstructions}</span>
          </Detail>
        </Info>
      </Details>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #230312;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;
const Name = styled.div`
  text-align: center;
  width: 100%;
  font-size: 30px;
  padding: 20px 10px 20px;
  text-shadow: 1px 2px 2px #f693b9;
  color: #ffcdcd;
`;
const Details = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;
const Images = styled.div`
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  img {
    border-radius: 20px;
    height: 350px;
    width: 400px;
  }
  @media (width<=450px) {
    img {
      width: 300px;
      height: 300px;
    }
  }
`;

const Info = styled.div`
  padding: 50px 10px;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: white;
  h3 {
    padding: 0px 10px;
  }
  @media (width<=450px) {
    span {
      font-size: 13px;
    }
    h3 {
      font-size: 15px;
    }
  }
`;
const Detail = styled.div`
  display: flex;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default SingleDrink;
