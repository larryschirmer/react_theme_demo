import { SET_THEME, TOGGLE_THEME } from "./constants";

const initialState = {
  name: "light"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_THEME:
      return {
        ...state,
        name: payload
      }
    case TOGGLE_THEME:
      return {
        ...state,
        name: state.name === "light" ? "dark" : "light"
      };
    default:
      return state;
  }
};
