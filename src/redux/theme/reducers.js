import { TOGGLE_THEME } from "./constants";

const initialState = {
  name: "light"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_THEME:
      return {
        name: state.name === "light" ? "dark" : "light"
      };
    default:
      return state;
  }
};
