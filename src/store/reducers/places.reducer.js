const initState = {
    data: [
        {
            name: "Blank",
            ratingValue: 1,
            latitude: 50,
            longitude: 2
        }
    ]
};

const placesReducer = (state = initState, action) => {

    switch (action.type) {
        case "INIT_USERS":
          console.log(action);

          return {...state, data: action.users};
    }

    return state;
}

export default placesReducer;