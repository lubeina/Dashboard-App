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
      let updatedItems = state.restaurants.filter((item) => item !== payload);
      return {
        ...state,
        restaurants: updatedItems,
      };
    default:
      return state;
  }
};

export default reducer;
