const SET_TOKEN = "SET_TOKEN";

export function setToken(token) {
  return {
    type: SET_TOKEN,
    payload: token,
  };
}

export { SET_TOKEN };
