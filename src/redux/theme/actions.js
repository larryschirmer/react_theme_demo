import { SET_THEME, TOGGLE_THEME } from "./constants";

export const setTheme = themeName => dispatch => {
  dispatch({
    type: SET_THEME,
    payload: themeName
  });
};

export const toggleTheme = () => dispatch => {
  dispatch({
    type: TOGGLE_THEME
  });
};
