const initState = {
  "data": [
  ]
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "INIT_USERS":
      return { ...state, data: data };
  }

  return state;
}

export default filterReducer;