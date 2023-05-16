const FilterReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FILTER":
      return {
        ...state,
        FilterAlpha: action.payload,
      };
    case "COCKTAIL_PAGE":
      return {
        ...state,
        CocktailsPage: action.payload,
      };
    case "LOADER_30":
      return {
        ...state,
        Fprogress: 30,
      };
    case "LOADER_65":
      return {
        ...state,
        Fprogress: 65,
      };
    case "LOADER_100":
      return {
        ...state,
        Fprogress: 100,
      };
    default:
      break;
  }
};

export default FilterReducer;
