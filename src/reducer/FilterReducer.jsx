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
    default:
      break;
  }
};

export default FilterReducer;
