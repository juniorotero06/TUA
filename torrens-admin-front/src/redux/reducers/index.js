import { SET_TOKEN } from "../actions";
const initialState = {
  authToken: null,
};

function rootReducer(state = initialState, action) {
  if (action.type === SET_TOKEN) {
    return {
      authToken: action.payload,
    };
  }
  return state;
}
export default rootReducer;
