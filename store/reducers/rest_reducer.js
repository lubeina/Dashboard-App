const initialState = {
  analysis: [],
};

const rest_reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_RESTAURANTS":
      return { ...state, analysis: payload };
    default:
      return state;
  }
};

export default rest_reducer;
