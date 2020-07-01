const initialState = {
  restaurants: [],
};

const reducer = (state = initialState, { type, payload, id }) => {
  switch (type) {
    case "ADD_RESTAURANT":
      console.log("payload", payload);
      payload.id = id;
      return { ...state, restaurants: state.restaurants.concat(payload) };

    case "REMOVE_RESTAURANT":
      return state.filter((item) => item !== payload);
    default:
      return state;
  }
};

export default reducer;
