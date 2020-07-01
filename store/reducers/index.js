import { combineReducers } from "redux";

import reducers from "./reducers";
import rest_reducer from "./rest_reducer";

export default combineReducers({
  reducers: reducers,
  rest_reducer: rest_reducer,
});
