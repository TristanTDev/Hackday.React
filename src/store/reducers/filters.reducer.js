const initState = {
  ratingLevel: 1,
  currentRule: "greater-than"
}

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_RATING":
      return { ...state, ratingLevel: action.level };
    case "SET_RULE":
      return { ...state, currentRule: action.rule };
    default:
      break;
  }

  return state;
}

export default filterReducer;