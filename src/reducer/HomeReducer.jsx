const HomeReducer = (state, action) => {
  switch (action.type) {
    case "TOP_DRINKS":
      return {
        ...state,
        cocktails: action.payload,
      };

    case "RANDOM_VODKA":
      return {
        ...state,
        vodka: action.payload,
      };

    default:
      break;
  }
};

export default HomeReducer;
