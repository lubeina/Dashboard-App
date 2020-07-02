const initialState = {
  bakery: [],
  american: [],
  asian: [],
  fast_food: [],
};

const rest_reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_BAKERY":
      return { ...state, bakery: payload };
    case "GET_ASIAN":
      return { ...state, asian: payload };
    case "GET_AMERICAN":
      return { ...state, american: payload };
    case "GET_FASTFOOD":
      return { ...state, fast_food: payload };
    default:
      return state;
  }
};

export default rest_reducer;
