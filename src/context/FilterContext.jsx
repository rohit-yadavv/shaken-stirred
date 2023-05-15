import { createContext, useContext, useReducer, useEffect } from "react";
const FilterContext = createContext();
import reducer from "../reducer/FilterReducer";
import axios from "axios";
const initialState = {
  FilterAlpha: "A",
  FilterCocktail: [],
  CocktailsPage: [],
};
const API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

const FilterProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const ChangeAlpha = (event) => {
    let alpha = event.target.value;
    return dispatch({ type: "UPDATE_FILTER", payload: alpha });
  };

  const getFIlteredCocktails = async (url) => {
    console.log(url);
    try {
      const res = await axios.get(url);
      console.log(res);
      var drink = await res.data.drinks;
      dispatch({ type: "COCKTAIL_PAGE", payload: drink });
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getFIlteredCocktails(`${API}${state.FilterAlpha}`);
    console.log("first");
  }, [state.FilterAlpha]);

  return (
    <FilterContext.Provider value={{ ...state, ChangeAlpha }}>
      {props.children}
    </FilterContext.Provider>
  );
};

const useFilterProvider = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterProvider, useFilterProvider };
