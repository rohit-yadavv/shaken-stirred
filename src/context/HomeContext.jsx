import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducer/HomeReducer";

const AppContext = createContext();

const API = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const RANDOM_VODKA =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";
const RANDOM_TEQUILLA =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=tequila";
const NON_ALCOHOLIC =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=tequila";
const ALCOHOLIC =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

import spinner from "/public/assets/Spinner.gif";

const initialState = {
  cocktails: [],
  vodka: [],
  tequilla: [],
  non_alcoholic: [],
  alcoholic: [],
  isloading: true,
  drinkDetail: {},
  AlphaFilter: [],
  progress: 0,
};

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  var drinks = [];
  const addData = (drink) => {
    drinks = drinks.concat(drink);
    dispatch({ type: "TOP_DRINKS", payload: drinks });
    if (drinks.length === 10) {
      dispatch({ type: "LOADER_100" });
      dispatch({ type: "LOADING_FALSE" });
    }
  };

  const getCocktails = async (url) => {
    try {
      dispatch({ type: "LOADER_30" });
      const res = await axios.get(url);
      var drink = await res.data.drinks;
    } catch (error) {
      console.log("error");
    }
    addData(drink);
  };
  // to get vodka details
  const getVodka = async (url) => {
    try {
      const res = await axios.get(url);
      var vodka_drink = await res.data.drinks;
      dispatch({ type: "RANDOM_VODKA", payload: vodka_drink });
    } catch (error) {
      console.log("error");
    }
  };

  // to get Tequilla details
  const getTequilla = async (url) => {
    try {
      const res = await axios.get(url);
      var tequilla_drink = await res.data.drinks;
      dispatch({ type: "RANDOM_TEQUILLA", payload: tequilla_drink });
    } catch (error) {
      console.log("error");
    }
  };

  const getNonAlcholic = async (url) => {
    try {
      const res = await axios.get(url);
      var non_alcholic_drink = await res.data.drinks;
      dispatch({ type: "NON_ALCOHOLIC", payload: non_alcholic_drink });
    } catch (error) {
      console.log("error");
    }
  };
  const getAlcholic = async (url) => {
    try {
      const res = await axios.get(url);
      var alcholic_drink = await res.data.drinks;
      dispatch({ type: "ALCOHOLIC", payload: alcholic_drink });
    } catch (error) {
      console.log("error");
    }
  };

  const getDetails = async (url) => {
    try {
      dispatch({ type: "LOADER_30" });
      const res = await axios.get(url);
      dispatch({ type: "LOADER_60" });
      var drink_details = await res.data.drinks[0];
      dispatch({ type: "LOADER_80" });
      dispatch({ type: "DRINK_DETAIL", payload: drink_details });
      dispatch({ type: "LOADER_100" });
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    for (var i = 0; i < 10; i++) {
      getCocktails(API);
    }
    getVodka(RANDOM_VODKA);
    getTequilla(RANDOM_TEQUILLA);
    getNonAlcholic(NON_ALCOHOLIC);
    getAlcholic(ALCOHOLIC);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getDetails, spinner }}>
      {props.children}
    </AppContext.Provider>
  );
};

const useAppProvider = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useAppProvider };
