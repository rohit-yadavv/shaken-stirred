const HomeReducer = (state, action) => {
  switch (action.type) {
    case "TOP_DRINKS":
      return {
        ...state,
        cocktails: action.payload,
      };
    case "COCKTAIL_PAGE":
      return {
        ...state,
        CocktailsPage: action.payload,
      };

    case "RANDOM_VODKA":
      return {
        ...state,
        vodka: action.payload,
      };
    case "RANDOM_TEQUILLA":
      return {
        ...state,
        tequilla: action.payload,
      };
    case "DRINK_DETAIL":
      return {
        ...state,
        drinkDetail: action.payload,
      };
    case "NON_ALCOHOLIC":
      return {
        ...state,
        non_alcoholic: action.payload,
      };
    case "ALCOHOLIC":
      return {
        ...state,
        alcoholic: action.payload,
      };

    default:
      break;
  }
};

export default HomeReducer;
