import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducer/HomeReducer";

const AppContext = createContext();

const API = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const RANDOM_VODKA =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";

const initialState = {
  cocktails: [],
  vodka: [],
  isloading: false,
};

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  var drinks = [];
  const addData = (drink) => {
    drinks = drinks.concat(drink);
    dispatch({ type: "TOP_DRINKS", payload: drinks });
  };

  const getCocktails = async (url) => {
    try {
      const res = await axios.get(url);
      var drink = await res.data.drinks;
    } catch (error) {
      console.log("error");
    }
    addData(drink);
  };

  const getVodka = async (url) => {
    try {
      const res = await axios.get(url);
      var vodka_drink = await res.data.drinks;
      dispatch({ type: "RANDOM_VODKA", payload: vodka_drink });
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    for (var i = 0; i < 10; i++) {
      getCocktails(API);
    }
    getVodka(RANDOM_VODKA);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>
      {props.children}
    </AppContext.Provider>
  );
};

const useAppProvider = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useAppProvider };
